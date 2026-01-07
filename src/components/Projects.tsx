import { ExternalLink, Github, Target, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Retail Sales Forecasting for Rossmann',
    problem: 'Predict daily sales across 1,115 stores using historical data with 1M+ records and 24 features.',
    approach: 'Performed extensive EDA and feature engineering. Applied statistical validation (ADF, VIF, ANOVA, Jarque-Bera, Rainbow test). Built ensemble models using Random Forest, LightGBM, and XGBoost with Time Series Split.',
    outcome: 'Achieved 95.5% variance explained with optimized hyperparameters using Optuna.',
    impact: 'SHAP analysis revealed key drivers (Promo, Customers, StoreType, Seasonal trends) enabling promotional planning and inventory optimization.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Optuna'],
    liveUrl: 'https://github.com/shubham318',
    category: 'Time Series',
  },
  {
    title: 'Credit Card Default Prediction',
    problem: 'Build a production-style risk classification pipeline for predicting credit card defaults.',
    approach: 'Developed robust pipeline for handling imbalanced financial data. Benchmarked models using precision-recall and ROC-AUC metrics with threshold optimization.',
    outcome: 'Achieved 0.89 test ROC-AUC with 22% lift in default-class recall through careful model tuning.',
    impact: 'Enables early detection of high-risk customers and reduces default exposure through risk segmentation and reliability diagnostics.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    liveUrl: '#',
    category: 'Risk Analytics',
  },
  {
    title: 'Google Play Store App Review Analysis',
    problem: 'Analyze large-scale app data to understand pricing strategies, user behavior, and app performance.',
    approach: 'Conducted comprehensive EDA exploring price-install correlations. Applied NLP sentiment analysis on user reviews and performed user segmentation.',
    outcome: 'Generated actionable KPIs for app performance and identified key factors driving downloads.',
    impact: 'Insights improved pricing strategy and category positioning to optimize app downloads and user engagement.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Power BI', 'Tableau'],
    liveUrl: '#',
    category: 'EDA',
  },
];

const categories = ['All', 'Time Series', 'Risk Analytics', 'EDA', 'ML', 'NLP'];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container-wide">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-lg text-muted-foreground mt-4 mb-8 max-w-2xl">
          End-to-end data science projects demonstrating analytical rigor and business impact.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                category === 'All'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="bg-card rounded-xl border border-border shadow-soft overflow-hidden card-hover"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-1.5" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Problem & Approach */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                        <Target size={16} className="text-primary" />
                        Problem
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                        <Lightbulb size={16} className="text-primary" />
                        Approach
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  {/* Outcome & Impact */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        Outcome
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                        <TrendingUp size={16} className="text-primary" />
                        Business Impact
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
