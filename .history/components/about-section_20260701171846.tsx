import { Card, CardContent } from '@/components/ui/card';
import { Award, Code2, Briefcase, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '15+', color: 'from-blue-500 via-cyan-500 to-teal-500', bgColor: 'bg-blue-100 dark:bg-blue-950', glowClass: 'glow-blue' },
    { icon: Award, label: 'Certifications', value: '8', color: 'from-purple-500 via-pink-500 to-rose-500', bgColor: 'bg-purple-100 dark:bg-purple-950', glowClass: 'glow-purple' },
    { icon: Briefcase, label: 'Months Experience', value: '6', color: 'from-green-500 via-emerald-500 to-teal-500', bgColor: 'bg-green-100 dark:bg-green-950', glowClass: 'glow-green' },
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 border-4 border-transparent hover:border-current overflow-hidden ${stat.bgColor} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} p-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl ${stat.glowClass}`}>
                    <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                      <stat.icon className="h-10 w-10 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                  <h3 className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-lg">{stat.label}</p>
                  <Sparkles className="absolute top-2 right-2 h-6 w-6 text-yellow-400 fill-yellow-400 animate-pulse" />
                </CardContent>
              </Card>
            ))}
          </div>
 
          <Card className="max-w-4xl mx-auto border-4 border-purple-500 shadow-2xl bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-800 dark:via-purple-950/30 dark:to-pink-950/30 hover:scale-105 transition-all duration-500 glow-purple">
            <CardContent className="p-8">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
               <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
  I'm a{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    data-driven problem solver
  </span>{" "}
  passionate about transforming{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    raw data into actionable business insights
  </span>
  . My interests lie at the intersection of{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    Data Analytics, Analytics Engineering, AI, and Automation
  </span>
  , where I build solutions that help organizations make smarter decisions.
  <br />
  <br />
  I work with{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    SQL, Python, Power BI, and modern data tools
  </span>{" "}
  to collect, transform, analyze, and visualize data. Beyond traditional analytics, I enjoy building{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    AI-powered applications
  </span>
  ,{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    automated reporting systems
  </span>
  , and{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    end-to-end ETL pipelines
  </span>{" "}
  that reduce manual effort and improve efficiency.
  <br />
  <br />
  My goal is to leverage{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    data and artificial intelligence
  </span>{" "}
  to solve{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    real-world problems
  </span>
  , uncover meaningful patterns, and create{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    measurable business impact
  </span>{" "}
  through technology.
</p>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
