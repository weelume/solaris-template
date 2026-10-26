export type Copy = {
    zh: string;
    en: string;
};
export const copy = (zh: string, en: string): Copy => ({ zh, en });
export const intro = copy('以清洁可再生的太阳能，为住宅与企业提供动力。从今天起，减少碳足迹，降低能源开支。', 'Powering homes and businesses with clean, renewable solar solutions. Reduce your carbon footprint and energy costs today.');
export const services = [
    { title: copy('住宅光伏安装', 'Home Solar Installation'), description: copy('量身设计屋顶太阳能系统，让每一寸屋顶释放更多能量。', 'Custom rooftop solar systems designed for maximum energy production.'), image: 'KLec2lHNIL2FXAGxagNZs6yeAE.png' },
    { title: copy('灵活融资方案', 'Solar Financing'), description: copy('灵活分期与融资选择，以更轻松的起点迈向清洁能源。', 'Flexible EMI and financing plans so you can switch to solar with little upfront cost.'), image: 'y20gbmvWCf91BsDb3MiOzpYwKQ.png' },
    { title: copy('智能能源监测', 'Smart Monitoring'), description: copy('智能监测与优化，让您的系统全天候高效运行。', 'Smart monitoring and AI optimization keep your system performing 24/7.'), image: 'zSsNc6A7TsxzWG0fw5Xha8eu3Q.png' },
    { title: copy('电池储能系统', 'Battery Storage'), description: copy('储存多余太阳能，在停电时为家庭提供可靠电力。', 'Store extra solar power and keep the lights on during outages.'), image: 'SpbvEPTkWhMgwMirh9WYaeeVbV8.png' },
    { title: copy('商业光伏方案', 'Commercial Solar'), description: copy('为办公楼、工厂与农场提供屋顶及地面光伏系统。', 'Rooftop and ground-mounted systems for offices, factories and farms.'), image: 'PbMWA2lrkziF7IzfURSETqJLjys.png' },
    { title: copy('电动汽车充电', 'EV Charger Installation'), description: copy('用自家屋顶产生的清洁电力，为每一次出行充能。', 'Charge your electric car at home with clean power from your own solar system.'), image: 'vaK43sIdOULucegekA4FrMItMmY.png' },
];
export const projects = [
    { title: copy('住宅屋顶光伏', 'Residential Rooftop Solar'), description: copy('为现代家庭安装 10kW 屋顶光伏系统，减少电费支出，持续产生清洁能源。', '10kW rooftop solar system installed for a modern family home to reduce electricity bills and generate clean renewable energy.'), image: 'vNBcifoGCmAEmxetYuSO67NOcU.jpg' },
    { title: copy('商业太阳能安装', 'Commercial Solar Installation'), description: copy('40kW 商业光伏系统，为企业日常运营供电，大幅降低能源成本。', '40kW solar system installed on a commercial facility to power daily operations and significantly reduce energy costs.'), image: 'P5SaOdJhtAFwAXieRt7XgB1hTA.jpg' },
    { title: copy('家庭太阳能系统', 'Home Solar Panel Setup'), description: copy('高效屋顶组件搭配智能逆变技术，优化每一天的发电表现。', 'High-efficiency rooftop solar panels installed with smart inverter technology for optimized energy production.'), image: 'crtAPSC4ymJakXu1CagocBeUlUw.jpg' },
    { title: copy('光伏系统巡检', 'Solar System Inspection'), description: copy('通过定期检查与维护，保持组件性能，带来长期节能收益。', 'Routine inspection and maintenance to ensure maximum solar panel performance and long-term energy savings.'), image: 'u0s4V4MeDEaLubizTBg0qAdAWA.jpg' },
];
export const reels = [
    { date: '2026-04-10', title: copy('住宅太阳能安装', 'Residential Solar Installation'), description: copy('高效屋顶光伏，为家庭的每一天带来清洁可再生能源。', 'Installing efficient rooftop solar panels to power homes with clean renewable energy solutions daily.'), image: 'yz7dpTXEV87kiBDV7C7XVI568Q.png' },
    { date: '2024-10-02', title: copy('专业光伏施工', 'Professional Solar Setup'), description: copy('认证技术团队规范施工，确保安全、高效与长期可靠。', 'Certified technicians installing rooftop solar systems ensuring safety efficiency and reliable clean energy production.'), image: 'UAp3aOgZXmMPRG2Gr2r0ECoqzU.png' },
    { date: '2025-02-26', title: copy('地面光伏系统', 'Ground Solar System'), description: copy('地面光伏持续为住宅与小型企业提供可再生电力。', 'Ground mounted solar panels delivering renewable electricity for homes and small businesses daily.'), image: 'a90oHrEkk6XgBVRkNO3QkvDGRY.png' },
    { date: '2025-08-28', title: copy('太阳能性能监测', 'Solar Performance Monitoring'), description: copy('定期监测运行表现，保持高效、可靠与稳定的能源输出。', 'Technicians monitoring solar system performance regularly to maintain efficiency reliability and consistent energy output.'), image: 'CMWpTocf0ACMliCG9uKO1okmlo.png' },
];
export const benefits = [
    [copy('降低电费', 'Lower Electricity Bills'), copy('自主发电，减少每个月的电力开支。', 'Generate solar power and reduce monthly electricity costs.')],
    [copy('能源自主', 'Energy Independence'), copy('减少对电网的依赖，掌握自己的能源供给。', 'Reduce reliance on the grid and take control of your energy supply.')],
    [copy('提升房产价值', 'Increase Property Value'), copy('为房产增加长期价值与可持续吸引力。', 'Add lasting value and sustainable appeal to your property.')],
    [copy('友好环境', 'Eco Impact'), copy('使用可再生能源，降低日常生活的碳足迹。', 'Use renewable energy and lower your everyday carbon footprint.')],
    [copy('激励政策', 'Government Incentives'), copy('了解适用的当地激励政策，实际资格以政策为准。', 'Explore available local incentives; eligibility depends on current programs.')],
    [copy('长期节能收益', 'Long-Term Energy Savings'), copy('以可靠系统与持续维护，收获长期能源节省。', 'Enjoy long-term savings with a reliable system and regular maintenance.')],
];
export const faqs = [
    [copy('你们提供哪些太阳能服务？', 'What solar services do you offer?'), copy('我们提供咨询、系统设计、安装及维护等完整太阳能解决方案。', 'We provide solar solutions including consultation, system design, installation, and maintenance services.')],
    [copy('安装太阳能可以节省多少费用？', 'How much can I save with solar panels?'), copy('节省金额取决于系统容量、用电习惯、日照条件与当地电价，需要结合现场评估。', 'Solar panels can significantly reduce electricity bills depending on system size, energy usage, and sunlight availability.')],
    [copy('太阳能安装需要多久？', 'How long does solar installation take?'), copy('多数住宅项目在审批完成后，一至三天即可完成现场安装。', 'Most residential solar installations are completed within one to three days after system approval.')],
    [copy('阴天也能发电吗？', 'Do solar panels work during cloudy weather?'), copy('可以。阴天仍可发电，但发电量会随日照强度有所下降。', 'Yes, solar panels still generate electricity during cloudy days, although production may be slightly reduced.')],
    [copy('太阳能板可以使用多久？', 'How long do solar panels last?'), copy('多数光伏组件在适当维护下可使用 25 至 30 年。', 'Most solar panels have a lifespan of 25 to 30 years with minimal maintenance required.')],
    [copy('是否提供后续维护与支持？', 'Do you offer system maintenance and support?'), copy('我们提供系统监测、维护与技术支持，帮助系统持续稳定运行。', 'Yes, we provide monitoring, maintenance services, and technical support to ensure optimal system performance.')],
];
export const steps = [
    { title: copy('住宅能源评估', 'Home Assessment'), points: [copy('线上或现场勘察', 'Virtual or in-person site evaluation'), copy('量身设计太阳能系统', 'Customized solar system design'), copy('详细测算节能空间', 'Detailed energy savings analysis')] },
    { title: copy('个性化报价', 'Personalized Quote'), points: [copy('确认系统规格与报价', 'System specifications and pricing'), copy('清晰说明灵活融资选项', 'Flexible financing options explained'), copy('协助办理许可与文件', 'Permits and documentation handled')] },
    { title: copy('专业团队安装', 'Expert Installation'), points: [copy('认证太阳能技术人员', 'Certified solar technicians'), copy('快速、安全、规范施工', 'Quick and safe installation'), copy('完成质量检查', 'Quality inspection included')] },
    { title: copy('系统并网启用', 'System Activation'), points: [copy('完成电网连接与测试', 'Utility connection and testing'), copy('配置智能监控系统', 'Monitoring system setup'), copy('开始产生清洁太阳能', 'Start generating clean solar energy')] },
];
export const neighborhoods = [['Mission District', '94110'], ['Noe Valley', '94114'], ['Sunset District', '94122'], ['Richmond District', '94118'], ['Pacific Heights', '94115'], ['Bernal Heights', '94110'], ['Potrero Hill', '94107'], ['Marina District', '94123'], ['Glen Park', '94131']];
export const reviews = [
    { name: 'Daniel Carter', location: 'San Jose · 7.2 kW system', image: 'Bf5PpwlHezvzdhBMuCDaUnAlihI.png', quote: copy('整个安装过程非常顺利。启用太阳能后的第一个月，我们的电费就明显下降了。', 'Switching to solar with this team was seamless. Our electricity bills dropped significantly within the first month.') },
    { name: 'Michael Brooks', location: 'Oakland · 5.4 kW system', image: 'GrZJDb54VZqnUqcXML7yBiIv4.png', quote: copy('专业的安装和全程出色的支持，非常推荐他们的太阳能方案。', 'Professional installation and excellent support throughout the entire process. Highly recommend their solar solutions.') },
    { name: 'James Walker', location: 'Walnut Creek · Solar and battery', image: 'Q6jgEIElJXIApeLOFCWs5SsD5w.png', quote: copy('可靠的太阳能安装，清晰的指导，以及自始至终出色的客户服务。', 'Reliable solar installation with clear guidance and outstanding customer service from start to finish.') },
    { name: 'Ethan Walker', location: 'Berkeley · 6.1 kW system', image: 'MRQlFC5gFbT5QCAHVeGJa9iLEhg.png', quote: copy('从咨询到安装体验都很好，团队专业、知识丰富，而且效率很高。', 'Great experience from consultation to installation. The team was knowledgeable and very efficient.') },
    { name: 'Emily Parker', location: 'Palo Alto · 8.0 kW system', image: 'wIsnQzOQO7F4dx0Q5K8hVfy0RA.png', quote: copy('系统运行得很好，监测工具让我们可以每天查看发电情况。', 'The solar system works perfectly and the monitoring tools help track our energy production daily.') },
];
export const articles = [
    { slug: 'choosing-solar', title: copy('如何为自己的住宅选择太阳能系统', 'Choosing the right solar system for your home'), summary: copy('从用电量、屋顶条件与日照出发，找到适合自己的系统容量。', 'Start with consumption, roof conditions and sunlight to choose a suitable system.'), image: projects[0].image, body: [copy('先了解一整年的用电情况', 'Understand a full year of energy use'), copy('将每月电费与季节变化整理在一起，避免只根据某一个月的用电高峰确定系统容量。', 'Review monthly bills and seasonal changes rather than sizing a system from one unusually high month.'), copy('评估屋顶朝向、遮挡与结构条件', 'Assess roof orientation, shading and structure'), copy('由合格安装人员完成现场评估，并同时考虑未来电动汽车或热泵可能增加的用电需求。', 'Ask a qualified installer to assess the property and consider future demand from an electric car or heat pump.')] },
    { slug: 'battery-storage', title: copy('光伏与储能怎样协同工作', 'How solar and battery storage work together'), summary: copy('白天储存多余能量，在夜晚或停电时更加从容。', 'Store surplus energy during the day for greater flexibility after sunset.'), image: services[3].image, body: [copy('把发电时间与用电时间连接起来', 'Connect production with consumption'), copy('电池能够储存部分白天产生的多余电力。容量应与实际负载、预算及当地并网规则相匹配。', 'A battery stores some surplus daytime production. Capacity should match actual loads, budget and local grid rules.'), copy('备电能力需要单独设计', 'Backup power requires its own design'), copy('并非所有并网系统都能在停电时供电。请确认逆变器、切换设备与关键负载回路的配置。', 'Not every grid-connected system provides power during an outage. Confirm inverter, switching equipment and essential-load circuits.')] },
    { slug: 'system-care', title: copy('让太阳能系统长期保持良好状态', 'Keeping your solar system performing well'), summary: copy('通过监测、巡检和安全维护，及时发现性能变化。', 'Use monitoring and safe inspections to identify changes in performance.'), image: projects[3].image, body: [copy('观察趋势，不只关注某一天', 'Look at trends, not a single day'), copy('天气与季节会影响发电量。比较相似季节的数据，并在持续异常时联系专业人员。', 'Weather and seasons affect output. Compare similar periods and contact a professional if unusual changes persist.'), copy('把安全放在维护之前', 'Put safety first'), copy('不要自行攀爬屋顶或拆卸带电设备。组件清洁、连接检查与电气维护应由合格人员完成。', 'Do not climb onto the roof or dismantle live equipment. Use qualified personnel for cleaning, connection checks and electrical maintenance.')] },
];
