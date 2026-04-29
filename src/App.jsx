import { useState } from "react";
// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
en: {
navLinks: [["home","Home"],["services","Services"],["about","About"],["questionnaire","As
navCta: "Start Assessment",
heroEyebrow: "AI Solutions for Small & Medium Business",
heroDesc: "Xavier AI Business Solutions implements AI agents, ERP systems, and digital ma
heroCta1: "Start Free Assessment →",
heroCta2: "Explore Services",
heroStats: [
{num:"80%", label:"Avg reduction in\nrepetitive tasks"},
{num:"3×", label:"Faster business\ndecision-making"},
{num:"4.2×", label:"Average return\non ad spend"},
{num:"48h", label:"Time to your\ncustom proposal"},
],
servicesLabel: "What We Do",
servicesTitle: "THREE WAYS WE\nTRANSFORM YOUR BUSINESS",
servicesSub: "Pick one. Start all three. We meet you where you are and build from there."
aboutLabel: "About Us",
aboutManifesto: ["WE BUILD", "THE TOOLS", "THAT FREE", "YOUR TIME."],
aboutBody1: "Xavier AI Business Solutions was founded with one mission: give small and me
aboutBody2: "We don't believe in one-size-fits-all. Every implementation is custom-design
aboutValues: [
{icon:" ", title:"Speed", desc:"Most projects are operational within 4–12 weeks."},
{icon:" ", title:"Precision", desc:"Solutions designed specifically for your business,
{icon:" ", title:"ROI-First", desc:"Every decision is tied to a measurable business ou
{icon:" ", title:"Partnership", desc:"We stay involved long after launch. Your growth
],
howLabel: "How It Works",
processSteps: [
{n:"01", title:"Business Discovery Assessment", desc:"Complete our in-depth questionnai
{n:"02", title:"Diagnosis", desc:"Our team analyzes your responses to identify the high
{n:"03", title:"Custom Proposal", desc:"You receive a tailored roadmap with clear scope
{n:"04", title:"Implementation", desc:"We build, integrate, and test your solution with
{n:"05", title:"Optimization", desc:"Post-launch, we monitor performance and continuous
],
qSection: {
label: "Business Discovery",
title: "TELL US ABOUT\nYOUR BUSINESS.",
sub: "This assessment helps us understand exactly where you are today — so we can show
steps: [
{
},
{
},
{
},
{
id:"identity", num:"01", icon:" ",
title:"Company Identity",
subtitle:"Let's start with the basics — who you are and what you do.",
questions:[
{id:"name", type:"text", label:"Company name", placeholder:"Your company name"},
{id:"contactName", type:"text", label:"Your name", placeholder:"First and last na
{id:"email", type:"email", label:"Business email", placeholder:"you@company.com"}
{id:"industry", type:"select", label:"What industry are you in?", options:["Retai
{id:"employees", type:"select", label:"How many people work at your company?", op
{id:"revenue", type:"select", label:"Approximate annual revenue", options:["Prefe
{id:"model", type:"checkbox", label:"Business model (select all that apply)", opt
{id:"years", type:"select", label:"How long has your business been operating?", o
]
id:"processes", num:"02", icon:" ",
title:"Business Processes",
subtitle:"Help us understand how your business actually runs day-to-day.",
questions:[
{id:"coreProcesses", type:"checkbox", label:"Which of these processes exist in yo
{id:"manualWork", type:"textarea", label:"Describe what your team still does manu
{id:"bottleneck", type:"textarea", label:"What is your #1 operational bottleneck
{id:"repetitive", type:"checkbox", label:"Which tasks consume the most time witho
]
id:"technology", num:"03", icon:" ",
title:"Technology Stack",
subtitle:"Understanding your current tools helps us design the right integration st
questions:[
{id:"currentTools", type:"textarea", label:"List the software and tools your team
{id:"crm", type:"select", label:"Do you have a CRM (Customer Relationship Managem
{id:"dataStorage", type:"select", label:"How do you store and access business dat
{id:"integrations", type:"select", label:"How well are your current software tool
{id:"techComfort", type:"scale", label:"How comfortable is your team with new tec
{id:"techInvestment", type:"select", label:"Have you previously invested in digit
]
id:"challenges", num:"04", icon:" ",
title:"Pain Points & Challenges",
subtitle:"Honesty here leads to the most impactful solutions. What's really holding
questions:[
{id:"biggestProblems", type:"checkbox", label:"What are your biggest operational
{id:"lostOpportunity", type:"textarea", label:"Describe a recent opportunity you
{id:"urgency", type:"scale", label:"How urgent is solving these challenges {id:"impact", type:"select", label:"If left unsolved, what happens in the next 12
for yo
]
},
{
id:"goals", num:"05", icon:" ",
title:"Goals & Vision",
subtitle:"Where do you want to take this business — and how fast?",
questions:[
{id:"objectives", type:"checkbox", label:"What are your top priorities for the ne
{id:"successMetric", type:"textarea", label:"How would you define success 12 mont
{id:"aiReadiness", type:"scale", label:"How open is leadership to adopting AI-pow
{id:"budget", type:"select", label:"Estimated budget for digital transformation i
{id:"timeline", type:"select", label:"Ideal timeline to begin implementation", op
{id:"decisionMaker", type:"select", label:"Who makes the final decision on this i
]
},
{
id:"final", num:"06", icon:"✦",
title:"Final Details",
subtitle:"One last step — tell us anything else that will help us prepare your cust
questions:[
{id:"referral", type:"select", label:"How did you hear about Xavier AI?", options
{id:"competitors", type:"textarea", label:"Who are your 2–3 main competitors?", p
{id:"previousConsultant", type:"select", label:"Have you worked with a digital tr
{id:"additionalContext", type:"textarea", label:"Anything else you'd like us to k
]
},
],
progressLabel: "Step",
of: "of",
next: "Next →",
back: "← Back",
submit: "Submit My Business Assessment →",
thankYouTitle: "ASSESSMENT RECEIVED.",
thankYouBody: "Your business profile has been submitted. Our team will analyze your res
thankYouCall: " Want to talk sooner? Call us:",
after
},
testimonialsLabel: "Client Results",
testimonialsTitle: "REAL BUSINESSES.\nREAL NUMBERS.",
testimonialsSub: "Don't take our word for it — here's what our clients experienced contactLabel: "Get In Touch",
contactTitle: "LET'S TALK\nABOUT YOUR\nBUSINESS.",
contactSub: "Prefer to reach us directly? We're here for you.",
contactItems: [
{icon:" ", label:"Phone", val:"475-279-1360", href:"tel:4752791360"},
{icon:" ", label:"Email", val:"xavieraisolution@gmail.com", href:"mailto:xavieraisolut
{icon:" ", label:"Response Time", val:"Within 48 hours"},
{icon:" ", label:"First Step", val:"Free discovery call"},
{icon:" ", label:"Serving", val:"SMBs Nationwide"},
],
footerTagline: "Intelligent Transformation for Small & Medium Business",
footerCopy: "© 2025 Xavier AI Business Solutions",
},
es: {
navLinks: [["home","Inicio"],["services","Servicios"],["about","Nosotros"],["questionnair
navCta: "Iniciar Evaluación",
heroEyebrow: "Soluciones de IA para Pequeñas y Medianas Empresas",
heroDesc: "Xavier AI Business Solutions implementa agentes de IA, sistemas ERP y estrateg
heroCta1: "Evaluación Gratuita →",
heroCta2: "Ver Servicios",
heroStats: [
{num:"80%", label:"Reducción promedio en\ntareas repetitivas"},
{num:"3×", label:"Toma de decisiones\nmás rápida"},
{num:"4.2×", label:"Retorno promedio\nen publicidad"},
{num:"48h", label:"Tiempo para tu\npropuesta personalizada"},
],
servicesLabel: "Lo Que Hacemos",
servicesTitle: "TRES FORMAS DE\nTRANSFORMAR TU NEGOCIO",
servicesSub: "Elige uno. Comienza con los tres. Trabajamos desde donde estás.",
aboutLabel: "Nosotros",
aboutManifesto: ["CONSTRUIMOS", "LAS HERRAMIENTAS", "QUE LIBERAN", "TU TIEMPO."],
aboutBody1: "Xavier AI Business Solutions fue fundada con una misión: darles a las aboutBody2: "No creemos en soluciones genéricas. Cada implementación es diseñada a aboutValues: [
{icon:" {icon:" {icon:" {icon:" ", title:"Velocidad", desc:"La mayoría de los proyectos están operativos en 4–
", title:"Precisión", desc:"Soluciones diseñadas específicamente para tu negoc
", title:"ROI Primero", desc:"Cada decisión está vinculada a un resultado empr
", title:"Alianza", desc:"Nos mantenemos involucrados mucho después del lanzam
pequeñ
medida
],
howLabel: "Cómo Funciona",
processSteps: [
{n:"01", title:"Evaluación de Descubrimiento Empresarial", desc:"Completa nuestro cuest
{n:"02", title:"Diagnóstico", desc:"Nuestro equipo analiza tus respuestas para identifi
{n:"03", title:"Propuesta Personalizada", desc:"Recibes una hoja de ruta a medida con a
{n:"04", title:"Implementación", desc:"Construimos, integramos y probamos tu solución c
{n:"05", title:"Optimización", desc:"Tras el lanzamiento, monitoreamos y optimizamos co
],
qSection: {
label: "Descubrimiento Empresarial",
title: "CUÉNTANOS SOBRE\nTU NEGOCIO.",
sub: "Esta evaluación nos ayuda a entender exactamente dónde estás hoy — para mostrarte
steps: [
{
id:"identity", num:"01", icon:" ",
title:"Identidad de la Empresa",
},
{
},
{
},
{
},
subtitle:"Empecemos por lo básico — quiénes son y qué hacen.",
questions:[
{id:"name", type:"text", label:"Nombre de la empresa", placeholder:"Nombre de tu
{id:"contactName", type:"text", label:"Tu nombre", placeholder:"Nombre y apellido
{id:"email", type:"email", label:"Correo empresarial", placeholder:"tu@empresa.co
{id:"industry", type:"select", label:"¿En qué sector opera tu empresa?", options:
{id:"employees", type:"select", label:"¿Cuántas personas trabajan en tu empresa?"
{id:"revenue", type:"select", label:"Ingresos anuales aproximados", options:["Pre
{id:"model", type:"checkbox", label:"Modelo de negocio (selecciona todos los que
{id:"years", type:"select", label:"¿Cuánto tiempo lleva operando tu negocio?", op
]
id:"processes", num:"02", icon:" ",
title:"Procesos de Negocio",
subtitle:"Ayúdanos a entender cómo opera tu negocio día a día.",
questions:[
{id:"coreProcesses", type:"checkbox", label:"¿Cuáles de estos procesos existen en
{id:"manualWork", type:"textarea", label:"Describe qué hace tu equipo manualmente
{id:"bottleneck", type:"textarea", label:"¿Cuál es tu principal cuello de botella
{id:"repetitive", type:"checkbox", label:"¿Qué tareas consumen más tiempo sin agr
]
id:"technology", num:"03", icon:" ",
title:"Stack Tecnológico",
subtitle:"Entender tus herramientas actuales nos ayuda a diseñar la estrategia de i
questions:[
{id:"currentTools", type:"textarea", label:"Lista el software y las herramientas
{id:"crm", type:"select", label:"¿Tienes un CRM (gestión de relaciones con client
{id:"dataStorage", type:"select", label:"¿Cómo almacenas y accedes a los datos de
{id:"integrations", type:"select", label:"¿Qué tan bien conectadas están tus herr
{id:"techComfort", type:"scale", label:"¿Qué tan cómodo está tu equipo con nueva
{id:"techInvestment", type:"select", label:"¿Han invertido previamente en transfo
]
frena
id:"challenges", num:"04", icon:" ",
title:"Puntos de Dolor",
subtitle:"La honestidad aquí lleva a las soluciones más impactantes. ¿Qué te questions:[
{id:"biggestProblems", type:"checkbox", label:"¿Cuáles son tus mayores desafíos o
{id:"lostOpportunity", type:"textarea", label:"Describe una oportunidad reciente
{id:"urgency", type:"scale", label:"¿Qué tan urgente es resolver estos desafíos p
{id:"impact", type:"select", label:"Si no se resuelven, ¿qué pasa en los próximos
]
{
id:"goals", num:"05", icon:" ",
title:"Objetivos y Visión",
subtitle:"¿A dónde quieres llevar este negocio — y qué tan rápido?",
questions:[
{id:"objectives", type:"checkbox", label:"¿Cuáles son tus prioridades principales
{id:"successMetric", type:"textarea", label:"¿Cómo definiría el éxito en 12 meses
{id:"aiReadiness", type:"scale", label:"¿Qué tan abierto está el liderazgo {id:"budget", type:"select", label:"Presupuesto estimado para la inversión a adop
en tra
{id:"timeline", type:"select", label:"Cronograma ideal para comenzar la implement
{id:"decisionMaker", type:"select", label:"¿Quién toma la decisión final sobre es
]
},
{
id:"final", num:"06", icon:"✦",
title:"Detalles Finales",
subtitle:"Un último paso — cuéntanos lo que nos ayude a preparar tu estrategia pers
questions:[
{id:"referral", type:"select", label:"¿Cómo nos conociste?", options:["Búsqueda e
{id:"competitors", type:"textarea", label:"¿Quiénes son tus 2–3 principales compe
{id:"previousConsultant", type:"select", label:"¿Han trabajado antes con un consu
{id:"additionalContext", type:"textarea", label:"¿Algo más que quieras que sepamo
]
},
],
progressLabel: "Paso",
of: "de",
next: "Siguiente →",
back: "← Atrás",
submit: "Enviar Mi Evaluación Empresarial →",
thankYouTitle: "EVALUACIÓN RECIBIDA.",
thankYouBody: "Tu perfil empresarial ha sido enviado. Nuestro equipo analizará tus resp
thankYouCall: " ¿Quieres hablar antes? Llámanos:",
nuestr
},
testimonialsLabel: "Resultados de Clientes",
testimonialsTitle: "NEGOCIOS REALES.\nNÚMEROS REALES.",
testimonialsSub: "No te quedes con nuestra palabra — esto es lo que experimentaron contactLabel: "Contáctanos",
contactTitle: "HABLEMOS\nDE TU\nNEGOCIO.",
contactSub: "¿Prefieres contactarnos directamente? Estamos aquí para ti.",
contactItems: [
{icon:" ", label:"Teléfono", val:"475-279-1360", href:"tel:4752791360"},
{icon:" ", label:"Correo", val:"xavieraisolution@gmail.com", href:"mailto:xavieraisolu
{icon:" ", label:"Tiempo de Respuesta", val:"En menos de 48 horas"},
{icon:" {icon:" ", label:"Primer Paso", val:"Llamada de descubrimiento gratuita"},
", label:"Atendemos", val:"PYMEs en todo el país"},
],
footerTagline: "Transformación Inteligente para Pequeñas y Medianas Empresas",
footerCopy: "© 2025 Xavier AI Business Solutions",
},
pt: {
navLinks: [["home","Início"],["services","Serviços"],["about","Sobre"],["questionnaire","
navCta: "Iniciar Avaliação",
heroEyebrow: "Soluções de IA para Pequenas e Médias Empresas",
heroDesc: "Xavier AI Business Solutions implementa agentes de IA, sistemas ERP e estratég
heroCta1: "Avaliação Gratuita →",
heroCta2: "Ver Serviços",
heroStats: [
{num:"80%", label:"Redução média em\ntarefas repetitivas"},
{num:"3×", label:"Tomada de decisão\nmais rápida"},
{num:"4.2×", label:"Retorno médio\nem anúncios"},
{num:"48h", label:"Tempo para sua\nproposta personalizada"},
],
servicesLabel: "O Que Fazemos",
servicesTitle: "TRÊS FORMAS DE\nTRANSFORMAR SEU NEGÓCIO",
servicesSub: "Escolha um. Comece com os três. Trabalhamos de onde você está.",
aboutLabel: "Sobre Nós",
aboutManifesto: ["CONSTRUÍMOS", "AS FERRAMENTAS", "QUE LIBERTAM", "SEU TEMPO."],
aboutBody1: "A Xavier AI Business Solutions foi fundada com uma missão: dar às pequenas e
aboutBody2: "Não acreditamos em soluções genéricas. Cada implementação é projetada sob me
aboutValues: [
{icon:" {icon:" {icon:" ", title:"Velocidade", desc:"A maioria dos projetos está operacional em 4–12 s
", title:"Precisão", desc:"Soluções projetadas especificamente para o seu negó
", title:"ROI em Primeiro", desc:"Cada decisão está vinculada a um resultado m
{icon:" ", title:"Parceria", desc:"Permanecemos envolvidos muito após o lançamento."},
],
howLabel: "Como Funciona",
processSteps: [
{n:"01", title:"Avaliação de Descoberta Empresarial", desc:"Preencha nosso questionário
{n:"02", title:"Diagnóstico", desc:"Nossa equipe analisa suas respostas para identifica
{n:"03", title:"Proposta Personalizada", desc:"Você recebe um roteiro sob medida com es
{n:"04", title:"Implementação", desc:"Construímos, integramos e testamos sua solução co
{n:"05", title:"Otimização", desc:"Após o lançamento, monitoramos e otimizamos continua
],
qSection: {
label: "Descoberta Empresarial",
title: "CONTE-NOS SOBRE\nSEU NEGÓCIO.",
sub: "Esta avaliação nos ajuda a entender exatamente onde você está hoje — para mostrar
steps: [
{
id:"identity", num:"01", icon:" ",
title:"Identidade da Empresa",
subtitle:"Vamos começar pelo básico — quem são vocês e o que fazem.",
questions:[
},
{
},
{
},
{
},
{
{id:"name", type:"text", label:"Nome da empresa", placeholder:"Nome da sua empres
{id:"contactName", type:"text", label:"Seu nome", placeholder:"Nome e sobrenome"}
{id:"email", type:"email", label:"E-mail empresarial", placeholder:"voce@empresa.
{id:"industry", type:"select", label:"Em qual setor sua empresa atua?", options:[
{id:"employees", type:"select", label:"Quantas pessoas trabalham na sua empresa?"
{id:"revenue", type:"select", label:"Faturamento anual aproximado", options:["Pre
{id:"model", type:"checkbox", label:"Modelo de negócio (selecione todos que se ap
{id:"years", type:"select", label:"Há quanto tempo o seu negócio opera?", options
]
id:"processes", num:"02", icon:" ",
title:"Processos de Negócio",
subtitle:"Ajude-nos a entender como seu negócio funciona no dia a dia.",
questions:[
{id:"coreProcesses", type:"checkbox", label:"Quais desses processos existem na su
{id:"manualWork", type:"textarea", label:"Descreva o que sua equipe ainda faz man
{id:"bottleneck", type:"textarea", label:"Qual é o seu principal gargalo operacio
{id:"repetitive", type:"checkbox", label:"Quais tarefas consomem mais tempo sem a
]
de int
id:"technology", num:"03", icon:" ",
title:"Stack Tecnológico",
subtitle:"Entender suas ferramentas atuais nos ajuda a desenhar a estratégia questions:[
{id:"currentTools", type:"textarea", label:"Liste os softwares e ferramentas que
{id:"crm", type:"select", label:"Você tem um CRM (gestão de relacionamento com cl
{id:"dataStorage", type:"select", label:"Como você armazena e acessa dados do neg
{id:"integrations", type:"select", label:"Quão bem conectadas estão suas ferramen
{id:"techComfort", type:"scale", label:"Quão confortável sua equipe está com nova
{id:"techInvestment", type:"select", label:"Já investiram em transformação digita
]
id:"challenges", num:"04", icon:" ",
title:"Pontos de Dor",
subtitle:"A honestidade aqui leva às soluções mais impactantes. O que realmente te
questions:[
{id:"biggestProblems", type:"checkbox", label:"Quais são seus maiores desafios op
{id:"lostOpportunity", type:"textarea", label:"Descreva uma oportunidade recente
{id:"urgency", type:"scale", label:"Quão urgente é resolver esses desafios {id:"impact", type:"select", label:"Se não resolvidos, o que acontece nos próximo
para a
]
id:"goals", num:"05", icon:" ",
title:"Objetivos e Visão",
subtitle:"Para onde você quer levar este negócio — e com que rapidez?",
questions:[
{id:"objectives", type:"checkbox", label:"Quais são suas principais prioridades p
{id:"successMetric", type:"textarea", label:"Como definiria o sucesso daqui a 12
{id:"aiReadiness", type:"scale", label:"Quão aberta está a liderança para adotar
{id:"budget", type:"select", label:"Orçamento estimado para investimento em trans
{id:"timeline", type:"select", label:"Cronograma ideal para iniciar a implementaç
{id:"decisionMaker", type:"select", label:"Quem toma a decisão final sobre este i
]
},
{
id:"final", num:"06", icon:"✦",
title:"Detalhes Finais",
subtitle:"Último passo — conte-nos o que nos ajudará a preparar sua estratégia pers
questions:[
{id:"referral", type:"select", label:"Como nos conheceu?", options:["Pesquisa no
{id:"competitors", type:"textarea", label:"Quem são seus 2–3 principais concorren
{id:"previousConsultant", type:"select", label:"Já trabalharam com consultor de t
{id:"additionalContext", type:"textarea", label:"Algo mais que gostaria que soubé
]
},
],
progressLabel: "Etapa",
of: "de",
next: "Próximo →",
back: "← Voltar",
submit: "Enviar Minha Avaliação Empresarial →",
thankYouTitle: "AVALIAÇÃO RECEBIDA.",
thankYouBody: "Seu perfil empresarial foi enviado. Nossa equipe analisará suas resposta
thankYouCall: " Quer falar antes? Ligue para nós:",
},
testimonialsLabel: "Resultados de Clientes",
testimonialsTitle: "EMPRESAS REAIS.\nNÚMEROS REAIS.",
testimonialsSub: "Não acredite apenas em nossa palavra — veja o que nossos clientes exper
contactLabel: "Entre em Contato",
contactTitle: "VAMOS FALAR\nSOBRE SEU\nNEGÓCIO.",
contactSub: "Prefere nos contatar diretamente? Estamos aqui para você.",
contactItems: [
{icon:" ", label:"Telefone", val:"475-279-1360", href:"tel:4752791360"},
{icon:" ", label:"E-mail", val:"xavieraisolution@gmail.com", href:"mailto:xavieraisolu
{icon:" ", label:"Tempo de Resposta", val:"Em até 48 horas"},
{icon:" {icon:" ", label:"Primeiro Passo", val:"Chamada de descoberta gratuita"},
", label:"Atendemos", val:"PMEs em todo o país"},
],
footerTagline: "Transformação Inteligente para Pequenas e Médias Empresas",
footerCopy: "© 2025 Xavier AI Business Solutions",
},
};
// ─── STATIC DATA ──────────────────────────────────────────────────────────────
const SERVICES = [
{id:"agents",icon:"⬡",color:"#00E5FF",title:"AI Agents",tagline:"Autonomous intelligence th
{id:"erp",icon:"⬢",color:"#FF6B35",title:"ERP Systems",tagline:"One system to run every cor
{id:"marketing",icon:"◈",color:"#A855F7",title:"Digital Marketing",tagline:"Data-driven gro
];
const TESTIMONIALS = [
{name:"Maria Gonzalez",role:"CEO, Distribuidora Flex",industry:"Logistics",quote:"Xavier AI
{name:"James Okafor",role:"Founder, PrimeShelf Retail",industry:"Retail",quote:"The ERP imp
{name:"Sandra Park",role:"Director, Bloom Healthcare",industry:"Healthcare",quote:"Our digi
{name:"Carlos Mena",role:"Owner, Mena Construction",industry:"Construction",quote:"I was sk
];
// ─── LOGO ─────────────────────────────────────────────────────────────────────
function XavierLogoSVG({ height = 40 }) {
return (
<svg viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height,w
<polygon points="12,6 32,6 44,26 56,6 76,6 54,37 76,68 56,68 44,48 32,68 12,68 34,37" f
<line x1="30" y1="23" x2="18" y2="15" stroke="#00E5FF" strokeWidth="1.3" opacity="0.75"
<circle cx="16" cy="14" r="2.2" fill="#00E5FF" opacity="0.85"/>
<line x1="44" y1="32" x2="44" y2="22" stroke="#00E5FF" strokeWidth="1.3" opacity="0.75"
<circle cx="44" cy="20" r="2.2" fill="#00E5FF" opacity="0.85"/>
<line x1="40" y1="34" x2="64" y2="9" stroke="url(#ag)" strokeWidth="3.2" strokeLinecap=
<polygon points="64,9 56,12 61,18" fill="#00E5FF"/>
<circle cx="9" cy="37" r="3.5" fill="none" stroke="#1a5fa8" strokeWidth="1.6"/>
<circle cx="2" cy="28" r="2.2" fill="none" stroke="#1a5fa8" strokeWidth="1.3"/>
<circle cx="2" cy="46" r="2.2" fill="none" stroke="#1a5fa8" strokeWidth="1.3"/>
<circle cx="16" cy="31" r="2.2" fill="none" stroke="#1a5fa8" strokeWidth="1.3"/>
<line x1="9" y1="37" x2="2" y2="28" stroke="#1a5fa8" strokeWidth="1"/>
<line x1="9" y1="37" x2="2" y2="46" stroke="#1a5fa8" strokeWidth="1"/>
<line x1="9" y1="37" x2="16" y2="31" stroke="#1a5fa8" strokeWidth="1"/>
<line x1="2" y1="28" x2="2" y2="46" stroke="#1a5fa8" strokeWidth="0.8"/>
<line x1="2" y1="46" x2="16" y2="31" stroke="#1a5fa8" strokeWidth="0.8"/>
<text x="88" y="42" fontFamily="'Bebas Neue', sans-serif" fontSize="30" fill="#FFFFFF"
<text x="200" y="42" fontFamily="'Bebas Neue', sans-serif" fontSize="30" fill="#00E5FF"
<text x="89" y="57" fontFamily="'Outfit', sans-serif" fontSize="11" fontWeight="500" fi
<defs>
<linearGradient id="xg" x1="12" y1="6" x2="76" y2="68" gradientUnits="userSpaceOnUse"
<stop offset="0%" stopColor="#0d2a6b"/><stop offset="55%" stopColor="#1a5fa8"/><sto
</linearGradient>
<linearGradient id="ag" x1="40" y1="34" x2="64" y2="9" gradientUnits="userSpaceOnUse"
<stop offset="0%" stopColor="#1a5fa8"/><stop offset="100%" stopColor="#00E5FF"/>
</linearGradient>
</defs>
</svg>
);
}
// ─── CSS ──────────────────────────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;5
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#060810;--bg2:#0C1020;--border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'Outfit',sans-serif;overflow-x:hidden
/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-
.nav-links{display:flex;gap:28px;list-style:none}
.nav-links a{font-size:12px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;co
.nav-links a:hover{color:var(--white)}
.nav-cta{background:var(--cyan);color:var(--bg);font-size:12px;font-weight:700;letter-spacing
.nav-cta:hover{background:#33ECFF;transform:translateY(-1px)}
.nav-phone{font-size:13px;font-weight:600;color:var(--cyan);text-decoration:none;display:flex
.lang-switcher{display:flex;gap:3px}
.lang-btn{background:transparent;color:var(--off);font-family:'Outfit',sans-serif;font-size:1
.lang-btn:hover{border-color:var(--border2);color:var(--white)}
.lang-btn.active{background:var(--cyan);border-color:var(--cyan);color:var(--bg)}
/* HERO */
#home{min-height:100vh;display:flex;align-items:center;padding:120px 48px 80px;position:relat
.hero-bg{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 70%
.hero-grid-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(
.hero-inner{max-width:1100px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr
.hero-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:600;
.hero-dot{width:6px;height:6px;border-radius:50%;background:var(--cyan);animation:pulse 2s in
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.8)}}
.hero-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(52px,7vw,96px);line-height:0.
.hl-cyan{color:var(--cyan)}.hl-orange{color:var(--orange)}
.hero-desc{font-size:17px;font-weight:300;color:var(--off);line-height:1.75;max-width:480px;m
.hero-actions{display:flex;gap:16px;align-items:center;flex-wrap:wrap}
.btn-primary{background:var(--cyan);color:var(--bg);font-family:'Outfit',sans-serif;font-size
.btn-primary:hover{background:#33ECFF;transform:translateY(-2px);box-shadow:0 8px 32px .btn-outline{background:transparent;color:var(--white);font-family:'Outfit',sans-serif;font-s
.btn-outline:hover{border-color:var(--white)}
.hero-stats{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.stat-card{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:24p
.stat-card:hover{border-color:var(--border2);transform:translateY(-3px)}
.stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px}
.stat-card:nth-child(1)::before{background:var(--cyan)}.stat-card:nth-child(2)::before{backgr
rgba(0
.stat-num{font-family:'Bebas Neue',sans-serif;font-size:48px;letter-spacing:0.02em;color:var(
.stat-label{font-size:12px;color:var(--off);font-weight:400;line-height:1.4;white-space:pre-l
/* SECTIONS */
.section{padding:120px 48px;max-width:1100px;margin:0 auto}
.section-label{font-size:11px;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;
.section-label::before{content:'';display:block;width:28px;height:1px;background:var(--cyan)}
.section-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(40px,5vw,64px);letter-spac
.section-sub{font-size:16px;font-weight:300;color:var(--off);line-height:1.7;max-width:540px}
/* SERVICES */
.services-header{margin-bottom:64px}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.service-card{background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:3
.service-card:hover{transform:translateY(-6px)}
.service-card-top{height:3px;position:absolute;top:0;left:0;right:0;transition:height 0.2s}
.service-card:hover .service-card-top{height:4px}
.service-glow{position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:
.service-icon{font-size:28px;margin-bottom:20px;display:block}
.service-stat{font-family:'Bebas Neue',sans-serif;font-size:52px;letter-spacing:0.02em;line-h
.service-stat-label{font-size:11px;color:var(--off);letter-spacing:0.08em;text-transform:uppe
.service-title{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:0.05em;color
.service-tagline{font-size:13px;color:var(--off);margin-bottom:24px;font-style:italic}
.service-bullets{list-style:none;display:flex;flex-direction:column;gap:10px}
.service-bullets li{font-size:13px;color:var(--off);display:flex;align-items:flex-start;gap:1
/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
.about-manifesto{font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,4vw,54px);line-heig
.about-manifesto span{color:var(--orange)}
.about-body{font-size:15px;font-weight:300;color:var(--off);line-height:1.8;margin-bottom:24p
.about-values{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:40px}
.value-item{background:var(--bg2);border:1px solid var(--border);border-radius:6px;padding:20
.value-icon{font-size:20px;margin-bottom:10px}
.value-title{font-size:13px;font-weight:700;color:var(--white);margin-bottom:6px;letter-spaci
.value-desc{font-size:12px;color:var(--off);line-height:1.5}
.about-process{display:flex;flex-direction:column;gap:0}
.process-step{display:flex;gap:24px;padding:24px 0;border-bottom:1px solid var(--border);posi
.process-step:last-child{border-bottom:none}
.process-step.highlighted{background:rgba(0,229,255,0.03);border:1px solid rgba(0,229,255,0.1
.process-num{font-family:'Bebas Neue',sans-serif;font-size:48px;letter-spacing:0.02em;color:v
.process-step:hover .process-num{color:var(--cyan)}
.process-step.highlighted .process-num{color:var(--cyan)}
.process-title{font-size:16px;font-weight:700;color:var(--white);margin-bottom:6px}
.process-desc{font-size:13px;color:var(--off);line-height:1.6;margin-bottom:0}
.process-cta{display:inline-flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;fo
.process-cta:hover{gap:10px}
/* ── QUESTIONNAIRE SECTION ── */
#questionnaire{background:var(--bg)}
.q-section-wrap{padding:120px 48px;max-width:1100px;margin:0 auto}
.q-wizard{background:var(--bg2);border:1px solid var(--border);border-radius:12px;overflow:hi
/* Progress bar */
.q-progress-bar-outer{height:3px;background:var(--border);position:relative}
.q-progress-bar-inner{height:3px;background:linear-gradient(90deg,var(--cyan),#33ECFF);transi
/* Step header */
.q-step-header{padding:32px 40px 0;display:flex;align-items:flex-start;justify-content:space-
.q-step-meta{display:flex;align-items:center;gap:12px;margin-bottom:6px}
.q-step-icon{font-size:22px}
.q-step-num{font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:0.2em;color:var
.q-step-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(26px,3vw,40px);letter-spaci
.q-step-subtitle{font-size:14px;color:var(--off);line-height:1.6;max-width:560px}
.q-progress-label{font-size:11px;color:var(--off);letter-spacing:0.1em;text-align:right;flex-
.q-progress-count{font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--white);line-
/* Step body */
.q-step-body{padding:32px 40px 40px;display:flex;flex-direction:column;gap:24px}
/* Fields */
.q-field{}
.q-label{font-size:13px;font-weight:500;color:var(--off);margin-bottom:10px;display:block;lin
.q-input{width:100%;background:var(--bg);border:1px solid var(--border);border-radius:4px;pad
.q-input:focus{border-color:var(--cyan)}
.q-input::placeholder{color:#3A4560}
textarea.q-input{resize:vertical;min-height:80px}
select.q-input{appearance:none;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg
select.q-input option{background:#0C1020}
/* Checkbox pills */
.q-pills{display:flex;flex-wrap:wrap;gap:8px}
.q-pill{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--off);font-weight:5
.q-pill:hover{border-color:var(--border2);color:var(--white)}
.q-pill.on{border-color:var(--cyan);color:var(--cyan);background:rgba(0,229,255,0.07)}
.q-pill-dot{width:8px;height:8px;border-radius:50%;border:1.5px solid currentColor;flex-shrin
.q-pill.on .q-pill-dot{background:var(--cyan);border-color:var(--cyan)}
/* Scale */
.scale-row{display:flex;gap:8px}
.scale-btn{flex:1;height:44px;background:var(--bg);border:1px solid var(--border);border-radi
.scale-btn:hover{border-color:var(--border2);color:var(--white)}
.scale-btn.sel{background:var(--cyan);border-color:var(--cyan);color:var(--bg)}
.scale-labels{display:flex;justify-content:space-between;font-size:10px;color:var(--off);marg
/* Two-column layout for fields */
.q-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px}
/* Navigation */
.q-nav{padding:24px 40px;border-top:1px solid var(--border);display:flex;align-items:center;j
.q-back-btn{background:transparent;color:var(--off);font-family:'Outfit',sans-serif;font-size
.q-back-btn:hover{border-color:var(--border2);color:var(--white)}
.q-next-btn{background:var(--cyan);color:var(--bg);font-family:'Outfit',sans-serif;font-size:
.q-next-btn:hover{background:#33ECFF;box-shadow:0 6px 24px rgba(0,229,255,0.25)}
.q-step-dots{display:flex;gap:6px;align-items:center}
.q-dot{width:6px;height:6px;border-radius:50%;background:var(--border2);transition:all .q-dot.active{width:18px;border-radius:3px;background:var(--cyan)}
.q-dot.done{background:rgba(0,229,255,0.4)}
0.2s}
/* Thank you */
.q-thankyou{padding:80px 40px;text-align:center}
.q-thankyou-icon{font-size:56px;margin-bottom:24px;animation:pulse 2s infinite}
.q-thankyou-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,5vw,56px);color:va
.q-thankyou-body{font-size:15px;color:var(--off);line-height:1.8;max-width:520px;margin:0 aut
.q-thankyou-call{font-size:14px;color:var(--cyan);font-weight:600}
.q-thankyou-call a{color:var(--cyan)}
/* TESTIMONIALS */
.testimonials-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.tcard{background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:36px;pos
.tcard:hover{transform:translateY(-4px);border-color:var(--border2)}
.tcard-top{display:flex;align-items:center;gap:16px;margin-bottom:24px}
.tcard-avatar{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justif
.tcard-name{font-size:15px;font-weight:600;color:var(--white);margin-bottom:3px}
.tcard-role{font-size:12px;color:var(--off)}
.tcard-badge{margin-left:auto;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transf
.tcard-quote{font-size:14px;color:var(--off);line-height:1.75;font-style:italic;margin-bottom
.tcard-result{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;l
.tcard-result::before{content:'↑';font-size:14px}
/* CONTACT */
.contact-layout{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
.contact-details{display:flex;flex-direction:column;gap:20px}
.contact-item{display:flex;align-items:center;gap:16px}
.contact-item-icon{width:44px;height:44px;border-radius:4px;background:var(--bg2);border:1px
.contact-item-label{font-size:10px;color:var(--off);letter-spacing:0.1em;text-transform:upper
.contact-item-val{font-size:15px;font-weight:600;color:var(--white)}
.contact-item-val a{color:var(--cyan);text-decoration:none}
.contact-item-val a:hover{text-decoration:underline}
.contact-cta-box{background:linear-gradient(135deg,rgba(0,229,255,0.08),rgba(0,229,255,0.02))
.contact-cta-box-title{font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--white);
.contact-cta-box-body{font-size:13px;color:var(--off);line-height:1.7;margin-bottom:20px}
/* FOOTER */
.footer{background:var(--bg2);border-top:1px solid var(--border);padding:60px 48px}
.footer-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:
.footer-tagline{font-size:13px;color:var(--off);margin-top:8px}
.footer-links{display:flex;gap:24px;flex-wrap:wrap}
.footer-links a{font-size:12px;color:var(--off);text-decoration:none;letter-spacing:0.06em;te
.footer-links a:hover{color:var(--white)}
.footer-copy{font-size:12px;color:var(--border2);margin-top:4px}
/* MOBILE */
@media(max-width:768px){
.nav{padding:0 20px}.nav-links{display:none}
#home{padding:100px 20px 60px}
.hero-inner{grid-template-columns:1fr;gap:48px}
.hero-stats{grid-template-columns:1fr 1fr}
.section{padding:80px 20px}
.services-grid{grid-template-columns:1fr}
.about-grid{grid-template-columns:1fr;gap:48px}
.q-section-wrap{padding:80px 20px}
.q-step-header{padding:24px 20px 0;flex-direction:column}
.q-step-body{padding:24px 20px 32px}
.q-nav{padding:20px}
.q-grid-2{grid-template-columns:1fr}
.testimonials-grid{grid-template-columns:1fr}
.contact-layout{grid-template-columns:1fr;gap:48px}
.footer{padding:48px 20px}
.footer-inner{flex-direction:column;align-items:flex-start;gap:24px}
}
`;
// ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────
function PillGroup({ options, value = [], onChange }) {
const toggle = (o) => onChange(value.includes(o) ? value.filter(v => v !== o) : [...value,
return (
<div className="q-pills">
{options.map(o => (
<div key={o} className={`q-pill ${value.includes(o) ? "on" : ""}`} onClick={() <div className="q-pill-dot" />
{o}
</div>
=> tog
))}
</div>
);
}
function ScaleInput({ min, max, minLabel, maxLabel, value, onChange }) {
return (
<div>
<div className="scale-row">
{Array.from({ length: max - min + 1 }, (_, i) => i + min).map(n => (
<button key={n} className={`scale-btn ${value === n ? "sel" : ""}`} onClick={() =>
))}
</div>
</div>
<div className="scale-labels"><span>{min} — {minLabel}</span><span>{maxLabel} — {max}</
);
}
function QField({ q, value, onChange }) {
if (q.type === "text" || q.type === "email")
return <input className="q-input" type={q.type} placeholder={q.placeholder} value={value
if (q.type === "textarea")
return <textarea className="q-input" placeholder={q.placeholder} value={value || ""} onCh
if (q.type === "select")
return (
<select className="q-input" value={value || ""} onChange={e => onChange(e.target.value)
<option value="">Select…</option>
{q.options.map(o => <option key={o}>{o}</option>)}
</select>
);
if (q.type === "checkbox")
return <PillGroup options={q.options} value={value} onChange={onChange} />;
if (q.type === "scale")
return <ScaleInput {...q} value={value} onChange={onChange} />;
return null;
}
// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function XavierAI() {
const [lang, setLang] = useState("en");
const [qStep, setQStep] = useState(0);
const [qAnswers, setQAnswers] = useState({});
const [qSubmitted, setQSubmitted] = useState(false);
const t = T[lang];
const qs = t.qSection;
const totalSteps = qs.steps.length;
const currentStep = qs.steps[qStep];
const statColors = ["var(--cyan)","var(--orange)","var(--purple)","var(--gold)"];
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }
const setAnswer = (stepId, qId, val) =>
setQAnswers(prev => ({ ...prev, [`${stepId}_${qId}`]: val }));
const getAnswer = (stepId, qId) => qAnswers[`${stepId}_${qId}`];
const handleNext = async () => {
if (qStep < totalSteps - 1) {
setQStep(s => s + 1);
document.getElementById("questionnaire")?.scrollIntoView({ behavior: "smooth", block: "
} else {
// Submit all answers to Formspree → delivers email to xavieraisolution@gmail.com
// IMPORTANT: Replace YOUR_FORM_ID below with your actual Formspree form ID (see const FORMSPREE_ID = "maqarreo";
try {
deploy
const payload = {};
// Flatten all answers into readable key-value pairs
Object.entries(qAnswers).forEach(([k, v]) => {
payload[k] = Array.isArray(v) ? v.join(", ") : (v ?? "");
});
payload["_subject"] = `New Xavier AI Lead: ${qAnswers["identity_name"] || "Unknown Co
payload["_language"] = lang;
await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
method: "POST",
headers: { "Content-Type": "application/json", "Accept": "application/json" },
body: JSON.stringify(payload),
});
} catch (e) {
// Fail silently — still show thank you to user
}
setQSubmitted(true);
}
};
const handleBack = () => { if (qStep > 0) { setQStep(s => s - 1); document.getElementById("
// When lang changes reset step but keep answers
const handleLangChange = (l) => { setLang(l); setQStep(0); };
const progressPct = ((qStep) / totalSteps) * 100;
return (
<>
<style>{css}</style>
{/* ── NAV ── */}
<nav className="nav">
<div style={{cursor:"pointer"}} onClick={() => scrollTo("home")}><XavierLogoSVG heigh
<ul className="nav-links">
{t.navLinks.map(([id,label]) => (
<li key={id}><a href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id)}}>{l
))}
</ul>
<div style={{display:"flex",alignItems:"center",gap:14}}>
<div className="lang-switcher">
{["en","es","pt"].map(l => (
<button key={l} className={`lang-btn ${lang===l?"active":""}`} onClick={()=>han
))}
</div>
<a className="nav-phone" href="tel:4752791360"> 475-279-1360</a>
<button className="nav-cta" onClick={()=>scrollTo("questionnaire")}>{t.navCta}</but
</div>
</nav>
{/* ── HERO ── */}
<section id="home" style={{paddingTop:120}}>
<div className="hero-bg"/><div className="hero-grid-bg"/>
<div className="hero-inner">
<div>
<div className="hero-eyebrow"><div className="hero-dot"/>{t.heroEyebrow}</div>
<h1 className="hero-title">GROW<br/><span className="hl-cyan">SMARTER.</span><br/
<p className="hero-desc">{t.heroDesc}</p>
<div className="hero-actions">
<button className="btn-primary" onClick={()=>scrollTo("questionnaire")}>{t.hero
<button className="btn-outline" onClick={()=>scrollTo("services")}>{t.heroCta2}
</div>
</div>
<div className="hero-stats">
{t.heroStats.map((s,i)=>(
<div className="stat-card" key={i}>
<div className="stat-num" style={{color:statColors[i]}}>{s.num}</div>
<div className="stat-label">{s.label}</div>
</div>
))}
</div>
</div>
</section>
{/* ── SERVICES ── */}
<section id="services">
<div style={{background:"var(--bg2)",padding:"120px 0"}}>
<div style={{maxWidth:1100,margin:"0 auto",padding:"0 48px"}}>
<div className="services-header">
<div className="section-label">{t.servicesLabel}</div>
<h2 className="section-title">{t.servicesTitle}</h2>
<p className="section-sub">{t.servicesSub}</p>
</div>
<div className="services-grid">
{SERVICES.map(s=>(
<div className="service-card" key={s.id} style={{borderColor:`rgba(${s.color=
<div className="service-card-top" style={{background:s.color}}/>
<div className="service-glow" style={{background:s.color}}/>
<span className="service-icon" style={{color:s.color}}>{s.icon}</span>
<div className="service-stat" style={{color:s.color}}>{s.stat}</div>
<div className="service-stat-label">{s.statLabel}</div>
<div className="service-title">{s.title}</div>
<div className="service-tagline">{s.tagline}</div>
<ul className="service-bullets">
{s.bullets.map((b,i)=><li key={i}><span style={{color:s.color}}>→</span>
</ul>
</div>
))}
</div>
</div>
</div>
</section>
{/* ── ABOUT ── */}
<section id="about">
<div className="section">
<div className="about-grid">
<div>
<div className="section-label">{t.aboutLabel}</div>
<div className="about-manifesto">
{t.aboutManifesto.map((line,i)=>(
<div key={i}>{i===t.aboutManifesto.length-1?<span>{line}</span>:line}</div>
))}
</div>
<p className="about-body">{t.aboutBody1}</p>
<p className="about-body">{t.aboutBody2}</p>
<div className="about-values">
{t.aboutValues.map(v=>(
<div className="value-item" key={v.title}>
<div className="value-icon">{v.icon}</div>
<div className="value-title">{v.title}</div>
<div className="value-desc">{v.desc}</div>
</div>
))}
</div>
</div>
<div>
<div className="section-label" style={{marginBottom:32}}>{t.howLabel}</div>
<div className="about-process">
{t.processSteps.map(step=>(
<div className={`process-step ${step.highlight?"highlighted":""}`} key={ste
<div className="process-num">{step.n}</div>
<div>
<div className="process-title">{step.title}</div>
<div className="process-desc">{step.desc}</div>
{step.cta && (
<div className="process-cta" onClick={()=>scrollTo(step.ctaId)}>
{step.cta}
</div>
)}
</div>
</div>
))}
</div>
</div>
</div>
</div>
</section>
{/* ── QUESTIONNAIRE ── */}
<section id="questionnaire" style={{background:"var(--bg2)",padding:"120px 0"}}>
<div className="q-section-wrap" style={{padding:"0 48px",maxWidth:1100,margin:"0 auto
<div className="section-label" style={{marginBottom:16}}>{qs.label}</div>
<h2 className="section-title">{qs.title}</h2>
<p className="section-sub" style={{marginBottom:48}}>{qs.sub}</p>
<div className="q-wizard">
{/* Progress bar */}
<div className="q-progress-bar-outer">
<div className="q-progress-bar-inner" style={{width:`${progressPct}%`}}/>
</div>
{qSubmitted ? (
<div className="q-thankyou">
<div className="q-thankyou-icon">✦</div>
<div className="q-thankyou-title">{qs.thankYouTitle}</div>
<p className="q-thankyou-body">{qs.thankYouBody}</p>
<div className="q-thankyou-call">{qs.thankYouCall} <a href="tel:4752791360">4
</div>
) : (
<>
{/* Step header */}
<div className="q-step-header">
<div>
<div className="q-step-meta">
<span className="q-step-icon">{currentStep.icon}</span>
<span className="q-step-num">{qs.progressLabel} {currentStep.num}</span
</div>
<div className="q-step-title">{currentStep.title}</div>
<div className="q-step-subtitle">{currentStep.subtitle}</div>
</div>
<div style={{textAlign:"right"}}>
<div className="q-progress-count">{qStep+1}<span style={{color:"var(--off
<div className="q-progress-label">{qs.progressLabel} {qs.of} {totalSteps}
</div>
</div>
{/* Questions */}
<div className="q-step-body">
{/* Special 2-col layout for identity step short fields */}
{currentStep.id === "identity" ? (
<>
<div className="q-grid-2">
{currentStep.questions.slice(0,2).map(q=>(
<div className="q-field" key={q.id}>
<label className="q-label">{q.label}</label>
<QField q={q} value={getAnswer(currentStep.id,q.id)} onChange={v=
</div>
))}
</div>
<div className="q-field">
<label className="q-label">{currentStep.questions[2].label}</label>
<QField q={currentStep.questions[2]} value={getAnswer(currentStep.id,
</div>
<div className="q-grid-2">
{currentStep.questions.slice(3,5).map(q=>(
<div className="q-field" key={q.id}>
<label className="q-label">{q.label}</label>
<QField q={q} value={getAnswer(currentStep.id,q.id)} onChange={v=
</div>
))}
</div>
<div className="q-grid-2">
{currentStep.questions.slice(5,7).map(q=>(
<div className="q-field" key={q.id}>
<label className="q-label">{q.label}</label>
<QField q={q} value={getAnswer(currentStep.id,q.id)} onChange={v=
</div>
))}
</div>
<div className="q-field">
<label className="q-label">{currentStep.questions[7].label}</label>
<QField q={currentStep.questions[7]} value={getAnswer(currentStep.id,
</div>
</>
) : currentStep.id === "technology" ? (
<>
<div className="q-field">
<label className="q-label">{currentStep.questions[0].label}</label>
<QField q={currentStep.questions[0]} value={getAnswer(currentStep.id,
</div>
<div className="q-grid-2">
{currentStep.questions.slice(1,3).map(q=>(
<div className="q-field" key={q.id}>
<label className="q-label">{q.label}</label>
<QField q={q} value={getAnswer(currentStep.id,q.id)} onChange={v=
</div>
))}
</div>
<div className="q-grid-2">
{currentStep.questions.slice(3,5).map(q=>(
<div className="q-field" key={q.id}>
<label className="q-label">{q.label}</label>
<QField q={q} value={getAnswer(currentStep.id,q.id)} onChange={v=
</div>
))}
</div>
<div className="q-field">
<label className="q-label">{currentStep.questions[5].label}</label>
<QField q={currentStep.questions[5]} value={getAnswer(currentStep.id,
</div>
</>
) : currentStep.id === "goals" ? (
<>
<div className="q-field">
<label className="q-label">{currentStep.questions[0].label}</label>
<QField q={currentStep.questions[0]} value={getAnswer(currentStep.id,
</div>
<div className="q-field">
<label className="q-label">{currentStep.questions[1].label}</label>
<QField q={currentStep.questions[1]} value={getAnswer(currentStep.id,
</div>
<div className="q-field">
<label className="q-label">{currentStep.questions[2].label}</label>
<QField q={currentStep.questions[2]} value={getAnswer(currentStep.id,
</div>
<div className="q-grid-2">
{currentStep.questions.slice(3,5).map(q=>(
<div className="q-field" key={q.id}>
<label className="q-label">{q.label}</label>
<QField q={q} value={getAnswer(currentStep.id,q.id)} onChange={v=
</div>
))}
</div>
<div className="q-field">
<label className="q-label">{currentStep.questions[5].label}</label>
<QField q={currentStep.questions[5]} value={getAnswer(currentStep.id,
</div>
</>
) : (
currentStep.questions.map(q=>(
<div className="q-field" key={q.id}>
<label className="q-label">{q.label}</label>
<QField q={q} value={getAnswer(currentStep.id,q.id)} onChange={v=>set
</div>
))
)}
</div>
{/* Navigation */}
<div className="q-nav">
<button className="q-back-btn" onClick={handleBack} style={{visibility:qSte
<div className="q-step-dots">
{qs.steps.map((_,i)=>(
<div key={i} className={`q-dot ${i===qStep?"active":i<qStep?"done":""}`
))}
</div>
<button className="q-next-btn" onClick={handleNext}>
{qStep===totalSteps-1 ? qs.submit : qs.next}
</button>
</div>
</>
)}
</div>
</div>
</section>
{/* ── TESTIMONIALS ── */}
<section id="testimonials">
<div style={{background:"var(--bg)",padding:"120px 0"}}>
<div style={{maxWidth:1100,margin:"0 auto",padding:"0 48px"}}>
<div style={{marginBottom:64}}>
<div className="section-label">{t.testimonialsLabel}</div>
<h2 className="section-title">{t.testimonialsTitle}</h2>
<p className="section-sub">{t.testimonialsSub}</p>
</div>
<div className="testimonials-grid">
{TESTIMONIALS.map(tc=>(
<div className="tcard" key={tc.name}>
<div className="tcard-top">
<div className="tcard-avatar" style={{background:tc.color}}>{tc.avatar}</
<div><div className="tcard-name">{tc.name}</div><div className="tcard-rol
<div className="tcard-badge" style={{color:tc.color,borderColor:tc.color,
</div>
<p className="tcard-quote">"{tc.quote}"</p>
<div className="tcard-result">{tc.result}</div>
</div>
))}
</div>
</div>
</div>
</section>
{/* ── CONTACT ── */}
<section id="contact">
<div style={{background:"var(--bg2)",padding:"120px 0"}}>
<div style={{maxWidth:1100,margin:"0 auto",padding:"0 48px"}}>
<div className="contact-layout">
<div>
<div className="section-label">{t.contactLabel}</div>
<h2 className="section-title">{t.contactTitle}</h2>
<p className="section-sub" style={{marginBottom:40}}>{t.contactSub}</p>
<div className="contact-details">
{t.contactItems.map((item,i)=>(
<div className="contact-item" key={i}>
<div className="contact-item-icon">{item.icon}</div>
<div>
<div className="contact-item-label">{item.label}</div>
<div className="contact-item-val">{item.href?<a href={item.href}>{ite
</div>
</div>
))}
</div>
</div>
<div>
<div className="contact-cta-box">
<div className="contact-cta-box-title">
{lang==="en"?"HAVEN'T TAKEN THE\nASSESSMENT YET?":lang==="es"?"¿AÚN NO HI
</div>
<p className="contact-cta-box-body">
{lang==="en"?"Our Business Discovery Assessment is the fastest way </p>
<button className="btn-primary" onClick={()=>scrollTo("questionnaire")}>
{lang==="en"?"Start the Assessment →":lang==="es"?"Hacer la Evaluación →
"
</button>
</div>
to get
<div style={{marginTop:24,background:"var(--bg)",border:"1px solid var(--bord
<div style={{fontSize:13,color:"var(--off)",marginBottom:12,fontWeight:500}
{lang==="en"?"PREFER TO TALK?":lang==="es"?"¿PREFIERES HABLAR?":"PREFERE
</div>
<div style={{fontSize:22,fontWeight:700,color:"var(--white)",marginBottom:6
<a href="tel:4752791360" style={{color:"var(--cyan)",textDecoration:"none
</div>
<div style={{fontSize:13,color:"var(--off)"}}>
<a href="mailto:xavieraisolution@gmail.com" style={{color:"var(--cyan)",t
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* ── FOOTER ── */}
<footer className="footer">
<div className="footer-inner">
<div><XavierLogoSVG height={36}/><div className="footer-tagline">{t.footerTagline}<
<div className="footer-links">
{t.navLinks.map(([id,label])=>(
<a key={id} href={`#${id}`} onClick={e=>{e.preventDefault();document.getElement
))}
</div>
<div>
<div style={{marginBottom:4}}><a href="tel:4752791360" style={{color:"var(--cyan)
<div style={{marginBottom:6}}><a href="mailto:xavieraisolution@gmail.com" style={
<div className="footer-copy">{t.footerCopy}</div>
</div>
</div>
</footer>
</>
);
}
