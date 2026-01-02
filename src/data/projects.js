// TODO Add a couple lines about each project
const data = [
  {
    title: 'Analysis of Active Thermal Pre-Conditioning on EV Battery SOH in Hot Climates',
    subtitle: 'Lithium Battery Lifecycle Management | University of Michigan',
    link: 'https://docs.google.com/presentation/d/1fh4o9ZtHmnW4W8z4bP02oNGRI8Ftd8c6/edit?usp=sharing&ouid=109204800417214559879&rtpof=true&sd=true',
    image: '/images/projects/batterypreconditioning.jpg',
    date: '2025-11-19',
    desc:
      'This project involved designing and simulating an active Battery Thermal Management System (BTMS) in MATLAB/Simulink to prevent heat soaking and degradation in EV batteries during key-off (parked) conditions, particularly in hot climates where ambient temperatures peak near 45°C. The core achievement was the development of a Simulink model coupling a 2-state thermal RC battery model with a closed-loop 3-mode controller for the cooling system. This controller intelligently switches the system ON or OFF based on internal temperature thresholds, ensuring the battery core stays below 30°C. The model also simulates a fixed-power A/C compressor by generating two outputs: a thermal sink signal (Q_cooler) based on the COP, and a parasitic electrical load (I_cooler = P/V) that discharges the battery. This enables accurate estimation of the energy penalty required to maintain thermal stability.',
  },
  {
    title: 'High Sensitivity Comb-Drive Capacitive Accelerometer for Head-Mounted Display',
    subtitle: 'EECS 425: Integrated Microsystems | University of Michigan',
    link: 'https://drive.google.com/file/d/1RhFZGr_jvjAV5osILd_MIghXXdhnywEo/view?usp=sharing',
    image: '/images/nearestdollar.jpg',
    date: '2025-04-21',
    desc:
      'Designed, simulated, and tested a high-sensitivity capacitive MEMS accelerometer for AR/VR head-mounted displays. The device featured an asymmetrical comb-drive with a variable-gap design, achieving 0.13 pF/g sensitivity over a ±20 g range. Fabricated using a Silicon-on-Glass process and integrated with a custom CMOS readout circuit, the system delivered 47 mV/g sensitivity and ~130 µg resolution. Structural and capacitance simulations were conducted in COMSOL and SolidWorks; circuit validation was performed in Cadence. The system supports electrostatic force testing and offers a tunable bandwidth up to 30 Hz—ideal for low-latency motion tracking in wearable electronics.',
  },
  {
    title: 'Design for Automated Installation of Vehicle Wiring Systems',
    subtitle: 'Graduate Research',
    image: '/images/projects/DFA.jpg',
    date: '2025-06-17',
    desc:
      'This project focused on automating the manual and ergonomically challenging process of wire harness installation in vehicle assembly using Design for Automated Robotic Assembly (DFARA) principles. A quantitative methodology was developed to assess robotic feasibility based on geometric and functional complexity. Key contributions include a 7-digit complexity framework to evaluate handling and insertion difficulty, a cost model linking design metrics to robotic operation expenses, and an ontology-based task structure to rank installation steps by robotic difficulty. Design recommendations—such as modular harnesses, selective stiffness zones, and automation-friendly connectors—were proposed to improve robotic compatibility. The approach also incorporated product family design strategies for scalable automation across vehicle platforms, laying a foundation for AI-driven, vision-assisted robotic systems. ',
  },
  {
    title: 'Analysis of Domestic Supply Chains and Manufacturing Capability',
    subtitle: 'Consulting project with Centrepolis Accelerators.',
    link: 'https://drive.google.com/file/d/17BFl6ujLWJzfu0zlI_UwXPNjm2YdpxPv/view?usp=sharing',
    image: '/images/projects/Centrepolis.jpg',
    date: '2024-12-10',
    desc:
      'This project focused on strengthening U.S. supply chains in battery manufacturing, semiconductors, electric motors, and casting/forging. The team developed data-driven roadmaps and an interactive Power BI dashboard profiling 180+ companies, with insights on financials, investors, and geographic distribution. Key deliverables included supplier profiling, transportation footprint mapping, and identification of bottlenecks. The project resulted in 30+ high-potential investment opportunities and a comprehensive technology-policy report for OEMs, startups, and coalitions, enabling informed decision-making and regional development. ',
  },
  {
    title: 'Design and Simulation of Biomimetic Flapping Wing Micro Aerial Vehicle (MAV)',
    subtitle: 'Undergraduate Final Year Project',
    link: 'https://drive.google.com/file/d/1m6wh9FkM7CHxseNdj9mkaHhYd53PUu9R/view?usp=drive_link',
    image: '/images/projects/Biomemetic.jpg',
    date: '2021-06-25',
    desc:
      'Designed and simulated a flapping-wing MAV inspired by insect flight, focusing on stable hovering and lift generation. Conducted transient CFD analysis using ANSYS FLUENT to evaluate unsteady aerodynamic performance, with structural modeling in SolidWorks.'
      + 'Achievements: Secured 2nd place in Innovation Next Projects and ranked among the top 10 finalists in a university-level research paper competition for innovation and technical depth.',
  },
  {
    title: 'Catalytic Converter Re-Engineering and Supplier Transition Project',
    subtitle: 'VAVE Projects | Royal Enfield',
    image: '/images/projects/catalytic.jpg',
    date: '2024-05-15',
    desc:
      'Governed a high-impact Value Analysis/Value Engineering (VAVE) initiative designed to achieve material governance and enhance supply chain resilience for the catalytic converter system. This strategic mandate involved engineering the deployment of a new, cost-effective perforated substrate technology and integrating a Japanese supplier (Cataler), fundamentally reducing high-cost Platinum Group Metal (PGM) consumption. Project accountability included developing the comprehensive financial business case and execution risk assessment for executive review, alongside ensuring validated compliance under stringent Euro 5/BS 6 emission cycles (for NOx, CO, and unburnt hydrocarbons). This initiative successfully achieved a 45% reduction in component cost, delivering over $7.5 million USD in annualized material savings, and included managing the entire manufacturing integration and production ramp-up cycle.',
  },
  {
    title: 'PDMS Thin Film Characterization for Gas Sensors',
    subtitle: 'Research Project | University of Michigan',
    image: '/images/projects/film.jpg',
    date: '2025-11-20',
    desc:
      'This project focused on characterizing and validating a novel, low-cost PDMS (polydimethylsiloxane) solution spraying method designed to deposit sensing layers for highly reproducible and scalable gas sensor fabrication. To achieve the required micro-scale precision, I personally managed the Process Development, designing and validating custom micro-scale stencils with minimum 200µm features using a complete CAD/CAM workflow (AutoCAD and Autodesk EAGLE). This included overseeing the full stencil manufacturing data chain, from converting complex DXF geometry into vendor-ready Gerber files to managing layer mapping. For Technical Execution and Metrology, I characterized the resulting PDMS films using the LEXT 3D Laser Scanning Microscope, meticulously measuring critical film properties such as thickness, feature width, and surface roughness to optimize spraying parameters. The Outcome was the successful establishment of a reliable, repeatable deposition process for the PDMS layer, which significantly reduced manufacturing costs and waste, paving a clear path toward the mass production of affordable gas sensor arrays.',
  },
  {
    title: 'Drivetrain NVH Reduction via Statistical Tolerance Optimization (Himalayan Platform)',
    subtitle: 'Graduate Engineering Trianee| Royal Enfiled',
    image: '/images/projects/Balancer.jpg',
    date: '2022-01-30',
    desc:
      'Spearheaded a Six Sigma (DMAIC) initiative to eliminate a critical acoustic defect (rattling/howling) in the Himalayan engine assembly, which was impacting production throughput. The investigation involved a comprehensive tear-down analysis of 100+ engines and the application of 7 QC tools to filter manufacturing variables. Through Pareto analysis and statistical process control (SPC) using box plots, the root cause was isolated to specific tolerance stack-ups between the Gear Pitch Circle Diameter (PCD) and casing center-to-center distances. I validated this hypothesis by designing a Taguchi (L9) experiment, deliberately assembling units with specific dimensional combinations to replicate the failure mode. The resulting optimization of machining tolerances successfully eliminated the defect, restoring line quality and protecting the vehicle long-term durability.',
  },
  {
    title: 'Development of Indoor Pass-By Noise Testing Protocol',
    subtitle: 'Graduate Engineering Trianee| Royal Enfiled',
    image: '/images/projects/indoor-pass-by-room.jpg',
    date: '2022-04-30',
    desc:
      'To accelerate vehicle validation cycles, I engineered a novel indoor testing methodology within a semi-anechoic chamber to replicate regulatory pass-by noise certification. Utilizing a custom spatial array of microphones and a Siemens Data Acquisition (DAQ) system, I captured acoustic signatures and performed a rigorous correlation study against traditional outdoor track data. The indoor model demonstrated strong fidelity, achieving results within a 10% deviation of actual track conditions. Consequently, this protocol was standardized and deployed across multiple motorcycle platforms, significantly reducing the logistical costs and weather dependencies associated with outdoor testing.',
  },
];

export default data;
