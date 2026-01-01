"use client"


import {
  ArrowRight,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Check,
  Zap,
  Shield,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#03045E] via-[#023E8A] to-[#03045E] text-[#CAF0F8] relative overflow-hidden">
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(0,119,182,0.15),transparent_50%)] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl border-b border-[#023E8A]/50">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-xl font-medium text-[#CAF0F8] hover:opacity-80 transition-opacity"
            >
              Fluxio
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {["Funciones", "Precios", "Documentación", "Blog"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-[#90E0EF] hover:text-[#CAF0F8] transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-sm text-[#CAF0F8] hover:bg-[#023E8A]/30 rounded-lg transition-all duration-200">
              Iniciar sesión
            </button>
            <button className="px-5 py-2 bg-[#00B4D8] text-[#03045E] text-sm font-medium rounded-full hover:bg-[#48CAE4] transition-all duration-200 shadow-lg shadow-[#00B4D8]/20">
              Empezar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00B4D8]/20 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#00B4D8] rounded-full animate-pulse" />
            <span className="text-sm text-[#CAF0F8]">Ahora en beta pública</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#CAF0F8] mb-6 leading-tight">
            Automatizá tu flujo de trabajo
            <br />
            con IA
          </h1>

          <p className="text-lg md:text-xl text-[#ADE8F4] mb-10 max-w-2xl mx-auto leading-relaxed">
            Creá automatizaciones inteligentes que conecten tus herramientas,
            procesen datos y ejecuten acciones — todo impulsado por IA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-[#00B4D8] text-[#03045E] font-medium rounded-full hover:bg-[#48CAE4] transition-all duration-200 shadow-xl shadow-[#00B4D8]/30 flex items-center gap-2 group">
              Empezar gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-[#0077B6] text-[#CAF0F8] font-medium rounded-full hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition-all duration-200">
              Ver demo
            </button>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="relative px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden border border-[#023E8A]/50 shadow-2xl shadow-[#00B4D8]/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/20 to-transparent pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
              alt="Interfaz de panel mostrando automatización de flujos con IA, gráficos y visualizaciones de datos en un diseño moderno oscuro"
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none"
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.style.minHeight = "400px"
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#CAF0F8] mb-4">
              Productos
            </h2>
            <p className="text-lg text-[#ADE8F4]">
              Cuatro formas en las que Fluxio lleva automatización a tu stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Gmail AI Agent */}
            <div className="group relative bg-[#03045E]/80 backdrop-blur-sm border border-[#023E8A]/50 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-200 hover:shadow-xl hover:shadow-[#00B4D8]/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <img
                      src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=120&fit=crop"
                      alt="Bandeja de entrada con mensajes organizados y etiquetas inteligentes en un escritorio moderno"
                      className="w-full h-24 object-cover rounded-lg mb-4"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-medium text-[#CAF0F8] mb-3">
                  Agente de IA para Gmail + Base de conocimiento
                </h3>

                <p className="text-[#ADE8F4] mb-6 leading-relaxed">
                  Automatizá triage, borradores, derivaciones y seguimientos —
                  apoyado en tus documentos internos.
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Base de conocimiento buscable",
                    "Respuestas automáticas + etiquetas inteligentes",
                    "Reglas de escalamiento y aprobaciones",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[#90E0EF]">
                      <Check className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#48CAE4] transition-colors duration-200 text-sm font-medium group/link"
                >
                  Explorar agente de Gmail
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Local JavaScript Agent */}
            <div className="group relative bg-[#03045E]/80 backdrop-blur-sm border border-[#023E8A]/50 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-200 hover:shadow-xl hover:shadow-[#00B4D8]/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <img
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=120&fit=crop"
                      alt="Sitio web moderno con widget de chat mostrando conversación en tiempo real"
                      className="w-full h-24 object-cover rounded-lg mb-4"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-medium text-[#CAF0F8] mb-3">
                  Agente local en JavaScript
                </h3>

                <p className="text-[#ADE8F4] mb-6 leading-relaxed">
                  Un agente liviano en tu sitio que responde, califica leads y
                  dispara workflows en tiempo real.
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Corre dentro de tu sitio",
                    "Conversaciones con contexto",
                    "Captura y enrutamiento de leads",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[#90E0EF]">
                      <Check className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#48CAE4] transition-colors duration-200 text-sm font-medium group/link"
                >
                  Ver agente web
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Mass Email Marketing */}
            <div className="group relative bg-[#03045E]/80 backdrop-blur-sm border border-[#023E8A]/50 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-200 hover:shadow-xl hover:shadow-[#00B4D8]/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Send className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=120&fit=crop"
                      alt="Panel de email marketing mostrando analíticas de campañas con tasas de apertura y engagement"
                      className="w-full h-24 object-cover rounded-lg mb-4"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-medium text-[#CAF0F8] mb-3">
                  Email marketing masivo
                </h3>

                <p className="text-[#ADE8F4] mb-6 leading-relaxed">
                  Lanzá campañas de alto volumen con personalización, segmentación
                  y controles de entregabilidad.
                </p>

                <ul className="space-y-3 mb-6">
                  {["Segmentos de audiencia", "Personalización con IA", "Analíticas + pruebas A/B"].map(
                    (feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[#90E0EF]">
                        <Check className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ),
                  )}
                </ul>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#48CAE4] transition-colors duration-200 text-sm font-medium group/link"
                >
                  Ver marketing
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Custom AI Product */}
            <div className="group relative bg-[#03045E]/80 backdrop-blur-sm border border-[#023E8A]/50 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-200 hover:shadow-xl hover:shadow-[#00B4D8]/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#00B4D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=120&fit=crop"
                      alt="Equipo colaborando en una reunión, planificando una solución de IA a medida"
                      className="w-full h-24 object-cover rounded-lg mb-4"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-medium text-[#CAF0F8] mb-3">
                  Producto de IA a medida
                </h3>

                <p className="text-[#ADE8F4] mb-6 leading-relaxed">
                  Contanos qué necesitás — diseñamos y entregamos una
                  automatización o un agente adaptado a tu flujo.
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Descubrimiento → prototipo → producción",
                    "Integraciones y seguridad",
                    "Iteración continua",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[#90E0EF]">
                      <Check className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#48CAE4] transition-colors duration-200 text-sm font-medium group/link"
                >
                  Pedir un desarrollo
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#CAF0F8] mb-4">
              Precios simples y transparentes
            </h2>
            <p className="text-lg text-[#ADE8F4]">
              Elegí el plan que mejor se adapte a tu workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="relative bg-[#03045E]/80 backdrop-blur-sm border border-[#023E8A]/50 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-[#CAF0F8] mb-2">Gratis</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-medium text-[#CAF0F8]">$0</span>
                  <span className="text-[#90E0EF]">/mes</span>
                </div>
                <p className="text-[#ADE8F4]">Ideal para probar Fluxio</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Hasta 100 automatizaciones/mes",
                  "1 agente de IA",
                  "Integraciones básicas",
                  "Soporte de la comunidad",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-[#90E0EF]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full px-6 py-3 border border-[#0077B6] text-[#CAF0F8] font-medium rounded-full hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition-all duration-200">
                Empezar
              </button>
            </div>

            {/* Pro Tier - Recommended */}
            <div className="relative bg-[#03045E]/80 backdrop-blur-sm border-2 border-[#00B4D8] rounded-2xl p-8 shadow-xl shadow-[#00B4D8]/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 bg-[#00B4D8] text-[#03045E] text-sm font-medium rounded-full">
                  Recomendado
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-transparent rounded-2xl pointer-events-none" />

              <div className="relative mb-8">
                <h3 className="text-2xl font-medium text-[#CAF0F8] mb-2">Pro</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-medium text-[#CAF0F8]">$29</span>
                  <span className="text-[#90E0EF]">/mes</span>
                </div>
                <p className="text-[#ADE8F4]">Para equipos y negocios en crecimiento</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Automatizaciones ilimitadas",
                  "5 agentes de IA",
                  "Todas las integraciones",
                  "Soporte prioritario",
                  "Analíticas avanzadas",
                  "Flujos personalizados",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-[#90E0EF]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full px-6 py-3 bg-[#00B4D8] text-[#03045E] font-medium rounded-full hover:bg-[#48CAE4] transition-all duration-200 shadow-lg shadow-[#00B4D8]/30">
                Iniciar prueba gratis
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="relative bg-[#03045E]/80 backdrop-blur-sm border border-[#023E8A]/50 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-[#CAF0F8] mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-medium text-[#CAF0F8]">A medida</span>
                </div>
                <p className="text-[#ADE8F4]">Para operaciones a gran escala</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Todo ilimitado",
                  "Agentes de IA ilimitados",
                  "Integraciones a medida",
                  "Soporte dedicado",
                  "Garantías SLA",
                  "Despliegue on-premise",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-[#90E0EF]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full px-6 py-3 border border-[#0077B6] text-[#CAF0F8] font-medium rounded-full hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition-all duration-200">
                Contactar ventas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Zap className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <div className="text-4xl font-medium text-[#CAF0F8] mb-2">10M+</div>
              <div className="text-[#90E0EF]">Automatizaciones ejecutadas</div>
            </div>

            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <div className="text-4xl font-medium text-[#CAF0F8] mb-2">50K+</div>
              <div className="text-[#90E0EF]">Usuarios activos</div>
            </div>

            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <div className="text-4xl font-medium text-[#CAF0F8] mb-2">99.9%</div>
              <div className="text-[#90E0EF]">SLA de disponibilidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative bg-gradient-to-br from-[#0077B6]/20 to-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,180,216,0.1),transparent_70%)] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-medium text-[#CAF0F8] mb-6">
                ¿Listo para automatizar tu flujo de trabajo?
              </h2>
              <p className="text-lg text-[#ADE8F4] mb-8 max-w-2xl mx-auto">
                Sumate a miles de equipos que ya usan Fluxio para crear automatizaciones inteligentes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-[#00B4D8] text-[#03045E] font-medium rounded-full hover:bg-[#48CAE4] transition-all duration-200 shadow-xl shadow-[#00B4D8]/30 flex items-center gap-2 group">
                  Empezá a construir ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 text-[#CAF0F8] font-medium rounded-full hover:bg-[#00B4D8]/10 transition-all duration-200">
                  Hablar con ventas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#023E8A]/50 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-medium text-[#CAF0F8] mb-4">Fluxio</div>
              <p className="text-sm text-[#90E0EF]">
                Automatización de flujos con IA para equipos modernos.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#CAF0F8] mb-4">Producto</h4>
              <ul className="space-y-2">
                {["Funciones", "Precios", "Documentación", "API"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-[#90E0EF] hover:text-[#CAF0F8] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#CAF0F8] mb-4">Empresa</h4>
              <ul className="space-y-2">
                {["Acerca de", "Blog", "Carreras", "Prensa"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-[#90E0EF] hover:text-[#CAF0F8] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#CAF0F8] mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Privacidad", "Términos", "Seguridad", "Estado"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-[#90E0EF] hover:text-[#CAF0F8] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#023E8A]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#90E0EF]">© 2025 Fluxio. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <Link key={social} href="#" className="text-sm text-[#90E0EF] hover:text-[#CAF0F8] transition-colors">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}