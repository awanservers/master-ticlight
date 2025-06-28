import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Search, Award, ArrowRight, Check, Target, BarChart3, Sparkles, Heart, Zap, CheckCircle, BadgeCheck, Users, Clock, TrendingUp, Eye, Settings, Lock } from 'lucide-react';

const ITAssurance = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'Audit TI',
      description: 'Audit komprehensif sistem teknologi informasi untuk memastikan keamanan, compliance, dan efisiensi operasional sesuai standar industri terkini.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200 hover:border-purple-300',
      features: ['Security Assessment', 'Compliance Review', 'Risk Analysis', 'Vulnerability Testing', 'Policy Evaluation', 'Control Testing']
    },
    {
      icon: BarChart3,
      title: 'Assessment Tata Kelola TI',
      description: 'Evaluasi mendalam terhadap tata kelola teknologi informasi untuk meningkatkan efektivitas dan alignment dengan tujuan bisnis strategis.',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-50 to-violet-100',
      borderColor: 'border-violet-200 hover:border-violet-300',
      features: ['IT Governance Review', 'Process Maturity Assessment', 'Strategic Alignment', 'Performance Metrics', 'Resource Optimization', 'Best Practice Implementation']
    }
  ];

  const certifications = [
    { 
      name: 'ISO 27001:2022', 
      description: 'Information Security Management Systems', 
      color: 'from-purple-500 to-purple-600',
      icon: Shield
    },
    { 
      name: 'COBIT Framework', 
      description: 'Control Objectives for Information Technologies', 
      color: 'from-violet-500 to-violet-600',
      icon: Settings
    },
    { 
      name: 'NIST Cybersecurity', 
      description: 'National Institute of Standards and Technology', 
      color: 'from-purple-600 to-violet-500',
      icon: Lock
    },
    { 
      name: 'ITIL Foundation', 
      description: 'IT Infrastructure Library Best Practices', 
      color: 'from-violet-600 to-purple-600',
      icon: Award
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Tim Bersertifikat',
      description: 'Konsultan berpengalaman dengan sertifikasi internasional dan keahlian mendalam di bidang IT governance.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Metodologi Terbukti',
      description: 'Menggunakan framework standar industri seperti COBIT, ISO 27001, dan NIST untuk hasil yang optimal.',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: TrendingUp,
      title: 'ROI Terukur',
      description: 'Fokus pada peningkatan efisiensi operasional dan pengurangan risiko yang dapat diukur secara kuantitatif.',
      color: 'from-purple-600 to-violet-500'
    },
    {
      icon: Clock,
      title: 'Dukungan Berkelanjutan',
      description: 'Pendampingan jangka panjang untuk memastikan implementasi rekomendasi berjalan dengan sukses.',
      color: 'from-violet-600 to-purple-600'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Memahami struktur organisasi, proses bisnis, dan landscape teknologi untuk merancang pendekatan audit yang tepat sasaran.'
    },
    {
      step: 2,
      title: 'Assessment & Analysis',
      description: 'Melakukan evaluasi mendalam terhadap kontrol keamanan, tata kelola TI, dan kematangan proses menggunakan metodologi standar.'
    },
    {
      step: 3,
      title: 'Gap Analysis & Reporting',
      description: 'Mengidentifikasi kesenjangan antara kondisi saat ini dengan best practice, disertai rekomendasi prioritas perbaikan.'
    },
    {
      step: 4,
      title: 'Implementation Support',
      description: 'Mendampingi implementasi rekomendasi dengan roadmap yang jelas dan monitoring progress secara berkelanjutan.'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Mitigasi Risiko Proaktif',
      description: 'Identifikasi dan atasi kerentanan sebelum menjadi ancaman nyata bagi bisnis Anda'
    },
    {
      icon: FileText,
      title: 'Compliance Terjamin',
      description: 'Pastikan organisasi memenuhi standar regulasi dan industri yang berlaku'
    },
    {
      icon: TrendingUp,
      title: 'Efisiensi Operasional',
      description: 'Optimasi proses TI untuk meningkatkan produktivitas dan mengurangi biaya operasional'
    },
    {
      icon: Target,
      title: 'Strategic Alignment',
      description: 'Selaraskan investasi TI dengan tujuan strategis bisnis untuk ROI maksimal'
    },
    {
      icon: Eye,
      title: 'Transparansi Governance',
      description: 'Visibilitas penuh terhadap performa dan risiko TI untuk pengambilan keputusan yang lebih baik'
    },
    {
      icon: Users,
      title: 'Stakeholder Confidence',
      description: 'Tingkatkan kepercayaan investor, klien, dan regulator melalui tata kelola TI yang solid'
    }
  ];

  const stats = [
    { number: '50+', label: 'Audit Completed', description: 'Proyek audit berhasil diselesaikan' },
    { number: '95%', label: 'Client Satisfaction', description: 'Tingkat kepuasan klien' },
    { number: '30%', label: 'Risk Reduction', description: 'Rata-rata pengurangan risiko TI' },
    { number: '24/7', label: 'Expert Support', description: 'Dukungan konsultan berpengalaman' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-violet-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-200/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-100/50 to-violet-100/50 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-violet-100/50 to-purple-100/50 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-200/50 to-violet-200/50 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Trust indicators */}
            <div className="flex items-center justify-center mb-8 space-x-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200 shadow-sm">
                <Shield className="h-4 w-4 text-purple-500" />
                <span className="text-purple-700 text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-violet-200 shadow-sm">
                <Award className="h-4 w-4 text-violet-500" />
                <span className="text-violet-700 text-sm font-medium">COBIT Expert</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200 shadow-sm">
                <CheckCircle className="h-4 w-4 text-purple-500" />
                <span className="text-purple-700 text-sm font-medium">50+ Audit Completed</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block">IT Assurance untuk</span>
              <span className="block bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Startup Modern
              </span>
            </h1>

            {/* Enhanced subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Lindungi dan optimalkan investasi teknologi startup Anda dengan 
              <span className="text-purple-600 font-semibold"> audit TI profesional</span> dan 
              <span className="text-violet-600 font-semibold"> assessment tata kelola</span> yang 
              <span className="text-purple-600 font-semibold"> mendorong pertumbuhan berkelanjutan</span>.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-purple-700 hover:via-violet-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 hover:shadow-xl flex items-center justify-center shadow-lg"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin" />
                Mulai Audit TI Anda
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/about"
                className="group border-2 border-purple-300 text-purple-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center shadow-sm"
              >
                <Users className="mr-3 h-6 w-6 group-hover:text-violet-500 transition-colors" />
                Bertemu Tim Expert
              </Link>
            </div>

            {/* Stats section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200 max-w-5xl mx-auto shadow-lg">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1 group-hover:text-violet-600 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-900 font-medium text-sm mb-1">{stat.label}</div>
                    <div className="text-gray-600 text-xs">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-violet-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-violet-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-violet-100 rounded-full px-6 py-2 border border-purple-200 mb-6">
              <Shield className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">Layanan IT Assurance</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dua Pilar Utama
              <span className="block bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                IT Assurance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kami menyediakan layanan IT Assurance komprehensif yang terdiri dari Audit TI dan Assessment Tata Kelola TI 
              untuk memastikan teknologi informasi Anda mendukung pertumbuhan bisnis secara optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 300}ms`
                }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110`}></div>
                
                <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border ${service.borderColor} transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 h-full shadow-sm hover:shadow-lg`}>
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8 flex justify-center">
                    <div className={`bg-gradient-to-r ${service.color} w-24 h-24 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <service.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                      {service.description}
                    </p>

                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className={`bg-gradient-to-r ${service.color} w-4 h-4 rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                            <Check className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Konsultasi Gratis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-12 border border-purple-200 max-w-4xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white fill-current" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Siap Mengamankan IT Infrastructure Anda?
                  </h3>
                  <p className="text-gray-600">
                    Mulai dengan assessment gratis untuk memahami kondisi TI saat ini
                  </p>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover:animate-spin" />
                Jadwalkan Assessment Gratis
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-violet-100 rounded-full px-6 py-2 border border-purple-200 mb-6">
              <Award className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">Keunggulan Kami</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Fasapro untuk IT Assurance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menggabungkan keahlian teknis mendalam dengan pemahaman bisnis untuk memberikan 
              insight yang actionable dan value yang terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Manfaat IT Assurance untuk Startup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IT Assurance bukan hanya tentang compliance, tetapi tentang membangun fondasi teknologi 
              yang kuat untuk mendukung pertumbuhan startup yang berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-sm hover:shadow-md group"
              >
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-violet-100 rounded-full px-6 py-2 border border-purple-200 mb-6">
              <BadgeCheck className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">Framework & Standar</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Framework dan Sertifikasi yang Kami Kuasai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim kami berpengalaman dengan berbagai framework dan standar internasional 
              untuk memberikan assessment yang komprehensif dan berkualitas tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 border border-gray-200 text-center shadow-sm hover:shadow-md group"
              >
                <div className={`bg-gradient-to-r ${cert.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <cert.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Metodologi IT Assurance Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pendekatan sistematis dan terstruktur untuk memberikan hasil assessment yang akurat, 
              actionable, dan memberikan value maksimal bagi organisasi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Mengoptimalkan IT Governance Startup Anda?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Jangan biarkan risiko TI menghambat pertumbuhan startup Anda. Mari bangun fondasi teknologi 
            yang kuat dengan IT Assurance profesional dari tim expert kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Zap className="mr-2 h-5 w-5" />
              Mulai Assessment Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Konsultasi dengan Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITAssurance;