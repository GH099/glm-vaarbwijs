'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  getAllTopics, 
  getQuizQuestions, 
  type Topic, 
  type QuizQuestion 
} from '@/lib/data/kvb-content'

// Types
interface ProgressData {
  completedSections: string[];
  quizScores: Record<string, number>;
}

// Local Storage helpers
const STORAGE_KEY = 'kvb-progress';

const loadProgress = (): ProgressData => {
  if (typeof window === 'undefined') return { completedSections: [], quizScores: {} };
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { completedSections: [], quizScores: {} };
  } catch {
    return { completedSections: [], quizScores: {} };
  }
};

const saveProgress = (data: ProgressData) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Icons
const AnchorIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a2 2 0 100 4 2 2 0 000-4zM12 6v16m-6-6h12M7 16l5 4 5-4" />
  </svg>
);

const CompassIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9l3-1.5L15 9l-1.5 3L15 15l-3-1.5L9 15l1.5-3L9 9z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

// Buoy visualization component
const BuoyVisualization = ({ type }: { type: string }) => {
  const buoys: Record<string, { color1: string; color2: string; shape: string; topmark: string; label: string }> = {
    'bakboord-ton': { color1: '#dc2626', color2: '#dc2626', shape: 'cylinder', topmark: 'flat', label: 'Bakboord' },
    'stuurboord-ton': { color1: '#16a34a', color2: '#16a34a', shape: 'cylinder', topmark: 'pointed', label: 'Stuurboord' },
    'noord-cardinal': { color1: '#1f2937', color2: '#eab308', shape: 'pillar', topmark: 'cones-up', label: 'Noord' },
    'oost-cardinal': { color1: '#1f2937', color2: '#eab308', shape: 'pillar', topmark: 'cones-opposite', label: 'Oost' },
    'zuid-cardinal': { color1: '#eab308', color2: '#1f2937', shape: 'pillar', topmark: 'cones-down', label: 'Zuid' },
    'west-cardinal': { color1: '#eab308', color2: '#1f2937', shape: 'pillar', topmark: 'cones-together', label: 'West' },
    'gevaar': { color1: '#1f2937', color2: '#dc2626', shape: 'pillar', topmark: 'balls', label: 'Gevaar' },
    'veilig-water': { color1: '#dc2626', color2: '#ffffff', shape: 'pillar', topmark: 'ball', label: 'Veilig Water' },
    'bijzonder': { color1: '#eab308', color2: '#eab308', shape: 'pillar', topmark: 'cross', label: 'Bijzonder' }
  };

  const buoy = buoys[type] || buoys['bakboord-ton'];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative">
        {/* Water */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-blue-400 rounded-full opacity-30"></div>
        
        {/* Buoy body */}
        <div 
          className="w-12 h-20 rounded-t-full relative mx-auto"
          style={{ 
            background: `linear-gradient(180deg, ${buoy.color1} 0%, ${buoy.color1} 45%, ${buoy.color2} 55%, ${buoy.color2} 100%)`,
            clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)'
          }}
        >
          {/* Topmark */}
          {buoy.topmark === 'pointed' && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[24px]" style={{ borderBottomColor: buoy.color1 }}></div>
          )}
          {buoy.topmark === 'flat' && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-3 rounded-t-sm" style={{ backgroundColor: buoy.color1 }}></div>
          )}
          {buoy.topmark === 'cones-up' && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[16px] border-b-black"></div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[16px] border-b-black -mt-1"></div>
            </div>
          )}
          {buoy.topmark === 'cones-down' && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[16px] border-t-black"></div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[16px] border-t-black -mt-1"></div>
            </div>
          )}
          {buoy.topmark === 'balls' && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-black"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          )}
          {buoy.topmark === 'ball' && (
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-red-500"></div>
          )}
          {buoy.topmark === 'cross' && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-yellow-500 text-2xl font-bold">✕</div>
          )}
        </div>
      </div>
      <span className="mt-4 font-medium text-sm">{buoy.label}</span>
    </div>
  );
};

// Navigation Light visualization
const NavigationLight = ({ type, description }: { type: string; description: string }) => {
  const lights: Record<string, { color: string; arcs: string; degrees: number }> = {
    'toplicht': { color: '#ffffff', arcs: '225°', degrees: 225 },
    'heklicht': { color: '#ffffff', arcs: '135°', degrees: 135 },
    'stuurboord': { color: '#16a34a', arcs: '112.5°', degrees: 112 },
    'bakboord': { color: '#dc2626', arcs: '112.5°', degrees: 112 },
    'rondom': { color: '#ffffff', arcs: '360°', degrees: 360 }
  };

  const light = lights[type] || lights['toplicht'];

  return (
    <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg">
      <div className="relative w-16 h-16">
        {/* Ship outline */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-6 bg-slate-300 rounded-full relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-slate-300 -translate-x-2"></div>
          </div>
        </div>
        {/* Light */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full animate-pulse"
          style={{ backgroundColor: light.color, boxShadow: `0 0 10px ${light.color}` }}
        ></div>
      </div>
      <span className="mt-2 text-xs font-medium capitalize">{type.replace('-', ' ')}</span>
      <span className="text-xs text-slate-500">{light.arcs}</span>
      <span className="text-xs text-slate-400 mt-1 text-center">{description}</span>
    </div>
  );
};

// Traffic Sign visualization
const TrafficSign = ({ code, meaning }: { code: string; meaning: string }) => {
  const getSignStyle = (code: string): { bg: string; border: string; symbol: string } => {
    if (code.startsWith('A')) {
      return { bg: 'bg-white', border: 'border-red-600', symbol: '🚫' };
    } else if (code.startsWith('B')) {
      return { bg: 'bg-blue-600', border: 'border-blue-600', symbol: '➡️' };
    } else if (code.startsWith('E')) {
      return { bg: 'bg-blue-500', border: 'border-blue-500', symbol: 'ℹ️' };
    }
    return { bg: 'bg-white', border: 'border-gray-400', symbol: '?' };
  };

  const style = getSignStyle(code);

  return (
    <div className="flex flex-col items-center p-3">
      <div className={`w-16 h-16 rounded-full ${style.bg} border-4 ${style.border} flex items-center justify-center relative`}>
        <span className="text-2xl">{style.symbol}</span>
        <span className="absolute -bottom-1 text-xs font-bold bg-slate-800 text-white px-1 rounded">{code}</span>
      </div>
      <span className="mt-3 text-xs text-center max-w-[100px]">{meaning}</span>
    </div>
  );
};

// Image Card component for generated images
const ImageCard = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <div className="flex flex-col items-center p-2">
    <img 
      src={src} 
      alt={alt} 
      className="w-32 h-32 object-contain rounded-lg shadow-sm"
    />
    {caption && <span className="mt-2 text-xs text-center text-slate-600">{caption}</span>}
  </div>
);

// Visual Learning Section component
const VisualLearningSection = ({ title, images }: { title: string; images: { src: string; alt: string; caption: string }[] }) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <ImageCard key={idx} {...img} />
        ))}
      </div>
    </CardContent>
  </Card>
);

// Quiz Component
const QuizSection = ({ topicId, onComplete }: { topicId: string; onComplete: (score: number) => void }) => {
  const questions = getQuizQuestions(topicId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="p-4 text-center text-slate-500">
        <p>Geen quizvragen beschikbaar voor dit onderdeel.</p>
      </div>
    );
  }

  const handleAnswer = (answerId: string) => {
    setSelectedAnswer(answerId);
    if (answerId === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      const finalScore = Math.round((score / questions.length) * 100);
      onComplete(finalScore);
    }
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="p-6 text-center">
        <div className={`text-6xl mb-4 ${percentage >= 70 ? 'text-green-500' : 'text-orange-500'}`}>
          {percentage >= 70 ? '🎉' : '📚'}
        </div>
        <h3 className="text-xl font-bold mb-2">Quiz Voltooid!</h3>
        <p className="text-lg mb-2">Je score: {score}/{questions.length} ({percentage}%)</p>
        <p className="text-slate-500">
          {percentage >= 70 ? 'Goed gedaan! Je beheerst dit onderdeel.' : 'Blijf oefenen om dit onderwerp onder de knie te krijgen.'}
        </p>
        <Button 
          className="mt-4" 
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setShowResult(false);
            setScore(0);
            setQuizCompleted(false);
          }}
        >
          Opnieuw proberen
        </Button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-slate-500">Vraag {currentQuestion + 1} van {questions.length}</span>
        <Badge variant="secondary">Score: {score}</Badge>
      </div>
      
      <div className="mb-6">
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
      </div>

      <h3 className="text-lg font-medium mb-4">{question.question}</h3>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => !showResult && handleAnswer(option.id)}
            disabled={showResult}
            className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
              showResult
                ? option.id === question.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : option.id === selectedAnswer
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200'
                : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
            {option.text}
            {showResult && option.id === question.correctAnswer && (
              <span className="ml-2 text-green-600">✓</span>
            )}
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`mt-4 p-4 rounded-lg ${selectedAnswer === question.correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
          <p className="font-medium mb-1">
            {selectedAnswer === question.correctAnswer ? '✅ Goed!' : '❌ Helaas, niet goed'}
          </p>
          <p className="text-sm text-slate-600">{question.explanation}</p>
        </div>
      )}

      {showResult && (
        <Button className="mt-4 w-full" onClick={nextQuestion}>
          {currentQuestion < questions.length - 1 ? 'Volgende vraag' : 'Bekijk resultaat'}
        </Button>
      )}
    </div>
  );
};

// Topic Content Component
const TopicContent = ({ topic, isCompleted, onToggleComplete }: { 
  topic: Topic; 
  isCompleted: boolean;
  onToggleComplete: () => void;
}) => {
  return (
    <div className="space-y-6">
      {/* Key Points */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <BookIcon />
            Kernpunten
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {topic.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Pitfalls */}
      {topic.pitfalls && topic.pitfalls.length > 0 && (
        <Alert className="border-orange-300 bg-orange-50">
          <AlertTriangleIcon />
          <AlertTitle className="text-orange-800">Let op - Struikelblokken!</AlertTitle>
          <AlertDescription>
            <ul className="mt-2 space-y-1">
              {topic.pitfalls.map((pitfall, idx) => (
                <li key={idx} className="text-orange-700">• {pitfall}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Content Sections */}
      {topic.content.map((section, idx) => (
        <Card key={idx}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{section.title}</CardTitle>
            {section.text && <CardDescription>{section.text}</CardDescription>}
          </CardHeader>
          <CardContent>
            {section.items && (
              <div className="grid gap-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Visual Examples - Based on topic */}
      {topic.id === 'kvb1-c' && (
        <Card>
          <CardHeader>
            <CardTitle>Visualisatie: Laterale Markering</CardTitle>
            <CardDescription>Herken de kleuren en vormen van betonning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <BuoyVisualization type="bakboord-ton" />
              <BuoyVisualization type="stuurboord-ton" />
            </div>
          </CardContent>
        </Card>
      )}

      {topic.id === 'kvb1-c' && (
        <Card>
          <CardHeader>
            <CardTitle>Visualisatie: Cardinale Markering</CardTitle>
            <CardDescription>De naam wijst naar de veilige kant</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <BuoyVisualization type="noord-cardinal" />
              <BuoyVisualization type="oost-cardinal" />
              <BuoyVisualization type="zuid-cardinal" />
              <BuoyVisualization type="west-cardinal" />
            </div>
          </CardContent>
        </Card>
      )}

      {topic.id === 'kvb1-c' && (
        <Card>
          <CardHeader>
            <CardTitle>Visualisatie: Overige Markering</CardTitle>
            <CardDescription>Afzonderlijk gevaar, veilig water en bijzondere markering</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <BuoyVisualization type="gevaar" />
              <BuoyVisualization type="veilig-water" />
              <BuoyVisualization type="bijzonder" />
            </div>
          </CardContent>
        </Card>
      )}

      {topic.id === 'kvb1-a' && (
        <Card>
          <CardHeader>
            <CardTitle>Visualisatie: Navigatielichten</CardTitle>
            <CardDescription>De basisverlichting voor kleine schepen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-center">
              <img 
                src="/images/navigatielichten.png" 
                alt="Navigatielichten op een schip" 
                className="max-w-full h-48 object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <NavigationLight type="toplicht" description="Wit, voor" />
              <NavigationLight type="stuurboord" description="Groen, rechts" />
              <NavigationLight type="bakboord" description="Rood, links" />
              <NavigationLight type="heklicht" description="Wit, achter" />
              <NavigationLight type="rondom" description="Wit, 360°" />
            </div>
          </CardContent>
        </Card>
      )}

      {topic.id === 'kvb1-a' && (
        <Card>
          <CardHeader>
            <CardTitle>Visualisatie: Verkeerstekens</CardTitle>
            <CardDescription>Belangrijke tekens langs de vaarweg</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TrafficSign code="A.1" meaning="Verboden door te varen" />
              <TrafficSign code="A.5" meaning="Verboden voor kleine schepen" />
              <TrafficSign code="A.12" meaning="Verboden voor schepen zonder motor" />
              <TrafficSign code="B.1" meaning="Voorrang verlenen" />
              <TrafficSign code="E.1" meaning="Maximumsnelheid" />
              <TrafficSign code="E.17" meaning="Waterskiën toegestaan" />
              <TrafficSign code="E.21" meaning="Snelle motorboten toegestaan" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* KVB1-B Visual: Fire Classes */}
      {topic.id === 'kvb1-b' && (
        <Card>
          <CardHeader>
            <CardTitle>Visualisatie: Brandklassen</CardTitle>
            <CardDescription>Welk blusmiddel voor welke brand?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-center">
              <img 
                src="/images/brandklassen.png" 
                alt="Brandklassen overzicht" 
                className="max-w-full h-48 object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <strong className="text-green-700">A - Vaste stoffen:</strong> hout, papier, textiel. Blus met water, schuim of poeder.
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <strong className="text-blue-700">B - Vloeistoffen:</strong> benzine, olie, diesel. Blus met schuim, poeder of CO2.
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <strong className="text-yellow-700">C - Gassen:</strong> butaan, propaan. Eerst gas afsluiten!
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-gray-500">
                <strong className="text-gray-700">D - Metalen:</strong> magnesium, natrium. Speciaal bluspoeder.
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <strong className="text-orange-700">F - Frituurvet:</strong> kookvetbrand. Speciaal vetblusmiddel of blusdeken.
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* KVB1-C Visual: Real Buoy Images */}
      {topic.id === 'kvb1-c' && (
        <Card>
          <CardHeader>
            <CardTitle>Betonning in de praktijk</CardTitle>
            <CardDescription>Hoe herken je de verschillende boeien en tonnen?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <ImageCard src="/images/bakboord-ton.png" alt="Bakboord ton" caption="Rood, stompe top" />
              <ImageCard src="/images/stuurboord-ton.png" alt="Stuurboord ton" caption="Groen, spitse top" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <ImageCard src="/images/noord-cardinal.png" alt="Noord cardinaal" caption="Veilig aan noordzijde" />
              <ImageCard src="/images/oost-cardinal.png" alt="Oost cardinaal" caption="Veilig aan oostzijde" />
              <ImageCard src="/images/zuid-cardinal.png" alt="Zuid cardinaal" caption="Veilig aan zuidzijde" />
              <ImageCard src="/images/west-cardinal.png" alt="West cardinaal" caption="Veilig aan westzijde" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* KVB1-C Visual: Weather */}
      {topic.id === 'kvb1-c' && (
        <Card>
          <CardHeader>
            <CardTitle>Weerkunde</CardTitle>
            <CardDescription>Weerkaarten en de Beaufort-schaal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img 
                  src="/images/weerkaart.png" 
                  alt="Weerkaart met druksystemen" 
                  className="w-full h-40 object-contain rounded-lg shadow-sm mb-2"
                />
                <p className="text-xs text-center text-slate-500">Lagedrukgebied met fronten</p>
              </div>
              <div>
                <img 
                  src="/images/beaufort.png" 
                  alt="Beaufort wind schaal" 
                  className="w-full h-40 object-contain rounded-lg shadow-sm mb-2"
                />
                <p className="text-xs text-center text-slate-500">Beaufort windkracht schaal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* KVB1-D Visual: Maneuvers */}
      {topic.id === 'kvb1-d' && (
        <Card>
          <CardHeader>
            <CardTitle>Manoeuvre visualisaties</CardTitle>
            <CardDescription>Schroefwerking, zuiging, ankeren en meer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img 
                  src="/images/schroefwerking.png" 
                  alt="Schroefwerking" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Schroefwerking achteruit</p>
              </div>
              <div>
                <img 
                  src="/images/zuiging.png" 
                  alt="Zuiging" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Zuiging bij passeren</p>
              </div>
              <div>
                <img 
                  src="/images/ankeren.png" 
                  alt="Ankeren" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Ankeren</p>
              </div>
              <div>
                <img 
                  src="/images/meren.png" 
                  alt="Meren" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Meren met lijnen</p>
              </div>
              <div>
                <img 
                  src="/images/mob.png" 
                  alt="Man overboord" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Man over boord</p>
              </div>
              <div>
                <img 
                  src="/images/schutten.png" 
                  alt="Schutten" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Schutten in sluis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* KVB2-F Visual: Navigation */}
      {topic.id === 'kvb2-f' && (
        <Card>
          <CardHeader>
            <CardTitle>Navigatie hulpmiddelen</CardTitle>
            <CardDescription>Kompas, getij en kaarttekens</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img 
                  src="/images/kompas.png" 
                  alt="Kompas" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Kompas roos</p>
              </div>
              <div>
                <img 
                  src="/images/getij.png" 
                  alt="Getij" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Getij cyclus</p>
              </div>
              <div>
                <img 
                  src="/images/kaarttekens.png" 
                  alt="Kaarttekens" 
                  className="w-full h-32 object-contain rounded-lg shadow-sm"
                />
                <p className="text-xs text-center text-slate-500 mt-1">Kaarttekens</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quiz Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CompassIcon />
            Test je kennis
          </CardTitle>
          <CardDescription>
            Beantwoord de vragen om te controleren of je de stof beheerst
          </CardDescription>
        </CardHeader>
        <CardContent>
          <QuizSection 
            topicId={topic.id} 
            onComplete={(score) => {
              if (score >= 70) {
                onToggleComplete();
              }
            }}
          />
        </CardContent>
      </Card>

      {/* Mark as complete */}
      <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
        <Checkbox 
          id={`complete-${topic.id}`}
          checked={isCompleted}
          onCheckedChange={onToggleComplete}
        />
        <label htmlFor={`complete-${topic.id}`} className="text-sm cursor-pointer">
          Ik heb dit onderdeel bestudeerd en begrijp de stof
        </label>
      </div>
    </div>
  );
};

// Domain Card Component
const DomainCard = ({ topic, progress, onClick }: { 
  topic: Topic; 
  progress: ProgressData;
  onClick: () => void;
}) => {
  const isCompleted = progress.completedSections.includes(topic.id);
  const quizScore = progress.quizScores[topic.id];
  
  // Determine domain color
  const getDomainColor = (id: string) => {
    if (id.includes('-a')) return 'border-l-blue-500';
    if (id.includes('-b')) return 'border-l-green-500';
    if (id.includes('-c')) return 'border-l-yellow-500';
    if (id.includes('-d')) return 'border-l-purple-500';
    if (id.includes('-e')) return 'border-l-cyan-500';
    if (id.includes('-f')) return 'border-l-rose-500';
    return 'border-l-gray-500';
  };

  return (
    <Card 
      className={`cursor-pointer hover:shadow-md transition-shadow border-l-4 ${getDomainColor(topic.id)}`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{topic.title}</CardTitle>
          {isCompleted && (
            <Badge className="bg-green-500 hover:bg-green-600">
              <CheckIcon /> Voltooid
            </Badge>
          )}
        </div>
        <CardDescription>{topic.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span>{topic.keyPoints.length} kernpunten</span>
          <span>•</span>
          <span>{topic.content.length} secties</span>
          {quizScore !== undefined && (
            <>
              <span>•</span>
              <span className={quizScore >= 70 ? 'text-green-600' : 'text-orange-600'}>
                Quiz: {quizScore}%
              </span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Main Page Component
export default function KVBLearningSite() {
  const [activeTab, setActiveTab] = useState('kvb1');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  // Use lazy initializer to load progress only once on mount
  const [progress, setProgress] = useState<ProgressData>(() => {
    if (typeof window === 'undefined') return { completedSections: [], quizScores: {} };
    return loadProgress();
  });

  const topics = getAllTopics();
  const kvb1Topics = topics.filter(t => t.id.startsWith('kvb1'));
  const kvb2Topics = topics.filter(t => t.id.startsWith('kvb2'));

  // Save progress when it changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const toggleSectionComplete = (topicId: string) => {
    setProgress(prev => {
      const isCompleted = prev.completedSections.includes(topicId);
      return {
        ...prev,
        completedSections: isCompleted
          ? prev.completedSections.filter(id => id !== topicId)
          : [...prev.completedSections, topicId]
      };
    });
  };

  const updateQuizScore = (topicId: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [topicId]: score }
    }));
  };

  const totalProgress = (topics: Topic[]) => {
    const completed = topics.filter(t => progress.completedSections.includes(t.id)).length;
    return Math.round((completed / topics.length) * 100);
  };

  if (selectedTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedTopic(null)}>
              ← Terug naar overzicht
            </Button>
            <h1 className="text-lg font-bold text-slate-800">Klein Vaarbewijs Leersite</h1>
            <div className="w-24"></div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-6">
          <TopicContent 
            topic={selectedTopic}
            isCompleted={progress.completedSections.includes(selectedTopic.id)}
            onToggleComplete={() => toggleSectionComplete(selectedTopic.id)}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <AnchorIcon />
            <h1 className="text-2xl font-bold text-slate-800">Klein Vaarbewijs I & II</h1>
          </div>
          <p className="text-slate-600">Interactieve leersite voor je examen voorbereiding</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Progress Overview */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Jouw Voortgang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>KVB1</span>
                  <span className="font-medium">{totalProgress(kvb1Topics)}%</span>
                </div>
                <Progress value={totalProgress(kvb1Topics)} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>KVB2</span>
                  <span className="font-medium">{totalProgress(kvb2Topics)}%</span>
                </div>
                <Progress value={totalProgress(kvb2Topics)} className="h-2" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Voltooi alle onderdelen om volledig voorbereid te zijn op je examen
            </p>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="kvb1" className="text-base py-3">
              <div className="flex flex-col">
                <span>KVB1</span>
                <span className="text-xs text-slate-500">Binnenwateren</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="kvb2" className="text-base py-3">
              <div className="flex flex-col">
                <span>KVB2</span>
                <span className="text-xs text-slate-500">Ruime Vaarwateren</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* KVB1 Content */}
          <TabsContent value="kvb1" className="space-y-4">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertTitle className="text-blue-800">KVB1 Examen Info</AlertTitle>
              <AlertDescription className="text-blue-700">
                <strong>40 vragen</strong> in <strong>60 minuten</strong>. Je hebt minimaal <strong>56 van 80 punten</strong> nodig om te slagen.
                Het zwaartepunt ligt op wettelijke bepalingen (18 vragen).
              </AlertDescription>
            </Alert>
            
            {kvb1Topics.map(topic => (
              <DomainCard 
                key={topic.id}
                topic={topic}
                progress={progress}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </TabsContent>

          {/* KVB2 Content */}
          <TabsContent value="kvb2" className="space-y-4">
            <Alert className="bg-purple-50 border-purple-200">
              <AlertTitle className="text-purple-800">KVB2 Examen Info</AlertTitle>
              <AlertDescription className="text-purple-700">
                <strong>27 vragen</strong> (23 meerkeuze + 4 open) in <strong>90 minuten</strong>. Je hebt minimaal <strong>35 van 50 punten</strong> nodig.
                Het zwaartepunt ligt op navigatie (19 vragen).
              </AlertDescription>
            </Alert>
            
            {kvb2Topics.map(topic => (
              <DomainCard 
                key={topic.id}
                topic={topic}
                progress={progress}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </TabsContent>
        </Tabs>

        {/* Study Tips */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Studietips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-1">📚 Aanbevolen studievolgorde</h4>
                <p className="text-slate-600">Begin met reglementenkaart, daarna BPR-kern, veiligheid, tekens, en manoeuvreren. Voor KVB2: eerst SRW/SRE, dan navigatie.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-1">⚠️ Veelgemaakte fouten</h4>
                <p className="text-slate-600">Verwar BPR-regels niet met RPR of SRW. 'Voorrang' ≠ 'medewerking'. Onderschat zuiging niet!</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-1">🎯 Focus punten</h4>
                <p className="text-slate-600">KVB1: Wettelijke bepalingen (18 vragen). KVB2: Navigatie (19 vragen). Besteed hier extra aandacht aan.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-1">🔄 Herhaling</h4>
                <p className="text-slate-600">Maak de quizzen meerdere keren. Herhaling helpt de stof te onthouden voor het examen.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exam Matrix */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Examenmatrix</CardTitle>
            <CardDescription>Overzicht van examenvragen per domein</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Examen</th>
                    <th className="text-left py-2 pr-4">Domein</th>
                    <th className="text-right py-2 pr-4">Vragen</th>
                    <th className="text-right py-2">Punten</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">KVB1</td>
                    <td className="py-2 pr-4">A - Wettelijke bepalingen</td>
                    <td className="text-right py-2 pr-4">18</td>
                    <td className="text-right py-2">40</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">KVB1</td>
                    <td className="py-2 pr-4">B - Voortstuwing & veiligheid</td>
                    <td className="text-right py-2 pr-4">5</td>
                    <td className="text-right py-2">10</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">KVB1</td>
                    <td className="py-2 pr-4">C - Waterwegen & meteorologie</td>
                    <td className="text-right py-2 pr-4">9</td>
                    <td className="text-right py-2">16</td>
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="py-2 pr-4 font-medium">KVB1 Totaal</td>
                    <td></td>
                    <td className="text-right py-2 pr-4 font-medium">40</td>
                    <td className="text-right py-2 font-medium">80</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">KVB2</td>
                    <td className="py-2 pr-4">E - Wettelijke bepalingen ruime vaarwateren</td>
                    <td className="text-right py-2 pr-4">8</td>
                    <td className="text-right py-2">12</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">KVB2</td>
                    <td className="py-2 pr-4">F - Navigatie</td>
                    <td className="text-right py-2 pr-4">19</td>
                    <td className="text-right py-2">38</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="py-2 pr-4 font-medium">KVB2 Totaal</td>
                    <td></td>
                    <td className="text-right py-2 pr-4 font-medium">27</td>
                    <td className="text-right py-2 font-medium">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-slate-500">
          <p>Klein Vaarbewijs I & II Leersite • Gebaseerd op officiële CBR-bronnen</p>
          <p className="mt-1">Peildatum: maart 2026 • Bestemd voor studie en examen voorbereiding</p>
        </div>
      </footer>
    </div>
  );
}
