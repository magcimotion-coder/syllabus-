// Syllabus data (from syllabus_dataset.json)
const SYLLABUS_DATA = [
  {
    "id": "electrical-engineering-ece",
    "name": "Electronics and Communication Engineering (ECE)",
    "units": [
      {
        "number": 1,
        "name": "Fundamentals of Electrical Engineering (Core Concepts & Circuits)",
        "topics": [
          "Basics of charge, current, voltage, power, energy and efficiency",
          "Ohm's law: practical relevance and limitations",
          "Kirchhoff's laws (KCL and KVL)",
          "Network solving techniques",
          "Superposition theorem",
          "Thevenin theorem",
          "Norton theorem",
          "Maximum power transfer theorem"
        ]
      },
      {
        "number": 2,
        "name": "AC Circuits, Power Systems & Electrical Machines",
        "topics": [
          "Sinusoidal AC signals: representation and properties (RMS, average, peak values, form factor)",
          "Introduction to single-phase and three-phase systems",
          "Power calculation: active, reactive and apparent power",
          "Phase angle",
          "Power factor and its improvement techniques",
          "Transformers: construction, EMF equation, efficiency and applications",
          "Electrical machines: DC machines (series and shunt)",
          "AC machines: single-phase and three-phase induction motor, synchronous generator"
        ]
      },
      {
        "number": 3,
        "name": "Basic Semiconductor Electronics",
        "topics": [
          "Metals, insulators and semiconductor materials",
          "Intrinsic and extrinsic semiconductors",
          "Doping",
          "Mobility",
          "Drift current and diffusion current",
          "Current conduction in semiconductors",
          "P-N junction diode and its characteristics and operation",
          "P-N junction resistances and capacitances (depletion and diffusion)",
          "Breakdown in P-N junction diodes"
        ]
      },
      {
        "number": 4,
        "name": "Diode Applications",
        "topics": [
          "Clipping and clamping circuits",
          "Rectifier circuits",
          "Zener diode and Zener diode as voltage regulator",
          "Voltage multipliers",
          "Switching behaviour of P-N diode",
          "Tunnel diodes",
          "Varactor diode",
          "Light emitting diode"
        ]
      },
      {
        "number": 5,
        "name": "Semiconductor Devices",
        "topics": [
          "Bipolar junction transistor (BJT): introduction and types",
          "BJT construction and characteristics in CB, CE and CC modes",
          "Metal oxide semiconductor field effect transistor (MOSFET): introduction and types",
          "MOSFET construction, input and transfer characteristics",
          "Operational amplifiers (Op-Amps): introduction",
          "Op-Amp practical applications",
          "Op-Amp open-loop and closed-loop configurations",
          "Applications of Op-Amps as inverting and non-inverting amplifier"
        ]
      }
    ]
  },
  {
    "id": "problem-solving-using-c",
    "name": "C Programming",
    "units": [
      {
        "number": 1,
        "name": "Introduction to Computer and Programming Concepts",
        "topics": [
          "Definition, characteristics and generations of computers",
          "Basic components of a computer system",
          "Memory, input, output and storage units",
          "High-level language and low-level language",
          "Software: system software, application software, hardware and firmware",
          "Operating system, compiler, interpreter and assembler",
          "Linker, loader, debugger and IDE",
          "Introduction to algorithm and flowchart",
          "Representation of algorithm using flowchart symbols, pseudo code and basic algorithm design",
          "Characteristics of a good algorithm",
          "Development of algorithm"
        ]
      },
      {
        "number": 2,
        "name": "Introduction to C Programming Language",
        "topics": [
          "Introduction to C programming language",
          "Declaring variables",
          "Preprocessor statements",
          "Arithmetic operators",
          "Programming style",
          "Keyboard input",
          "Relational operators",
          "Features of C language and concepts",
          "Basic program structure",
          "Simple data types, variables, constants and operators",
          "Comments",
          "Control flow statements: if, while, for, do-while and switch"
        ]
      },
      {
        "number": 3,
        "name": "Data Types and Structures",
        "topics": [
          "Bitwise operators",
          "Predefined and user-defined data types",
          "Arrays, declaration and operations on arrays",
          "Searching and sorting on arrays",
          "Types of sorting",
          "2D arrays",
          "Passing 2D arrays to functions",
          "Structure",
          "Member accessing",
          "Structure and union",
          "Array of structures",
          "Functions, declaration and use of functions",
          "Parameter passing",
          "Recursion"
        ]
      },
      {
        "number": 4,
        "name": "Fundamentals of Pointers",
        "topics": [
          "Introduction to pointers",
          "Pointer notations in C",
          "Declaration and usages of pointers",
          "Operations that can be performed on computers",
          "Use of pointers in programming exercises",
          "Parameter passing in pointers",
          "Call by value",
          "Call by references",
          "Arrays and characters using pointers",
          "Dynamic memory allocation"
        ]
      },
      {
        "number": 5,
        "name": "File Handling in C and Enum",
        "topics": [
          "Introduction to file handling",
          "File operations in C",
          "Defining and opening a file",
          "Reading a file",
          "Closing a file",
          "Input/output operations on file",
          "Counting characters, tabs and spaces",
          "File opening modes",
          "Error handling in input/output operations",
          "Enumerated data types",
          "Use of Enum",
          "Declaration of Enum"
        ]
      }
    ]
  },
  {
    "id": "applied-mathematics-1",
    "name": "Maths 111",
    "units": [
      {
        "number": 1,
        "name": "Unit I",
        "topics": [
          "Elementary transformations",
          "Linear dependence and independence of vectors",
          "Rank of a matrix (echelon and normal form)",
          "Inverse of a matrix by elementary operations",
          "Solution of non-homogeneous and homogeneous systems of linear equations"
        ]
      },
      {
        "number": 2,
        "name": "Unit II",
        "topics": [
          "Linear transformations",
          "Eigenvalues and eigenvectors",
          "Diagonalization of a matrix",
          "Cayley-Hamilton's theorem (without proof) and its applications"
        ]
      },
      {
        "number": 3,
        "name": "Unit III",
        "topics": [
          "Successive differentiation",
          "Leibnitz theorem",
          "Functions of several variables",
          "Limits, continuity and differentiability",
          "Partial differentiation",
          "Euler's theorem for homogeneous functions",
          "Composite functions",
          "Total derivatives",
          "Change of variables",
          "Taylor's and Maclaurin's series",
          "Maxima and minima of functions of two variables"
        ]
      },
      {
        "number": 4,
        "name": "Unit IV",
        "topics": [
          "Double integration in Cartesian and polar coordinates",
          "Evaluation of double integrals by substitution and changing the order of integration",
          "Triple integral",
          "Applications of multiple integrals to find area as double integral",
          "Volume as triple integral",
          "Surface area"
        ]
      }
    ]
  },
  {
    "id": "quantitative-aptitude-logical-reasoning",
    "name": "Career Skills for Logical Reasoning",
    "units": [
      {
        "number": 1,
        "name": "Number System and Work Efficiency",
        "sections": [
          {
            "name": "Number System",
            "topics": [
              "Divisibility rules",
              "Remainder theorem",
              "Unit digit",
              "Series",
              "Number of factors",
              "Simplification",
              "LCM and HCF"
            ]
          },
          {
            "name": "Time and Work",
            "topics": [
              "Efficiency",
              "Ratio of work done",
              "Work done in given time",
              "Combined work of multiple people",
              "Individual work rates",
              "Problems involving days and hours"
            ]
          }
        ]
      },
      {
        "number": 2,
        "name": "Time and Distance",
        "topics": [
          "Basic concepts",
          "Average speed",
          "Relative speed",
          "Time and distance conversions",
          "Problems involving uniform motion",
          "Trains crossing each other",
          "A man walking on a moving train"
        ]
      },
      {
        "number": 3,
        "name": "Percentage, Profit & Loss, Interest",
        "sections": [
          {
            "name": "Percentage",
            "topics": [
              "Basic percentage calculations",
              "Percentage increase and decrease",
              "Finding a given percentage of a number",
              "Percentage relationship between two numbers"
            ]
          },
          {
            "name": "Profit and Loss",
            "topics": [
              "Cost price",
              "Selling price",
              "Marked price",
              "Profit percentage",
              "Loss percentage",
              "Calculation of profit or loss"
            ]
          },
          {
            "name": "Simple Interest",
            "topics": [
              "Calculating interest earned on a principal amount at a fixed rate over a specific period",
              "Understanding the formula",
              "Converting time units",
              "Calculating simple interest",
              "Finding the principal amount"
            ]
          },
          {
            "name": "Compound Interest",
            "topics": [
              "Basic formula",
              "Different compounding frequencies",
              "Comparison with simple interest"
            ]
          }
        ]
      },
      {
        "number": 4,
        "name": "Logical and Analytical Reasoning",
        "topics": [
          "Number series",
          "Alphabet series",
          "Analogy and classification",
          "Blood relations",
          "Direction sense",
          "Coding-decoding",
          "Ranking and order",
          "Syllogisms",
          "Puzzles (seating arrangement and scheduling)",
          "Statement and conclusion",
          "Cause and effect",
          "Data sufficiency"
        ]
      }
    ]
  },
  {
    "id": "environmental-studies",
    "name": "Environmental Studies",
    "units": [
      {
        "number": 1,
        "name": "Introduction to Environmental Studies",
        "topics": [
          "Multidisciplinary nature of environmental studies",
          "Components of the Earth's environment: atmosphere, hydrosphere, lithosphere and biosphere",
          "Scope and importance",
          "Concept of sustainability and sustainable development"
        ]
      },
      {
        "number": 2,
        "name": "Ecosystems",
        "topics": [
          "What is an ecosystem?",
          "Structure and function of ecosystem",
          "Energy flow in an ecosystem: food chain, food web and ecological succession",
          "Case studies of forest ecosystem",
          "Case studies of grassland ecosystem",
          "Case studies of desert ecosystem",
          "Case studies of aquatic ecosystems: pond, stream, lake, river, ocean and estuary"
        ]
      },
      {
        "number": 3,
        "name": "Natural Resources: Renewable and Non-renewable Resources",
        "topics": [
          "Land resources and land-use changes",
          "Land degradation, soil erosion and desertification",
          "Deforestation",
          "Causes and impacts of mining and dam building on environment, forest, biodiversity and tribal population",
          "Water: use and over-exploitation of surface and ground water",
          "Floods and droughts",
          "Conflicts over water (international and inter-state)",
          "Heating of Earth and circulation of air",
          "Air mass formation and precipitation",
          "Energy resources: renewable and non-renewable energy resources",
          "Use of alternate energy sources",
          "Growing energy needs and case studies"
        ]
      },
      {
        "number": 4,
        "name": "Biodiversity and Conservation",
        "topics": [
          "Levels of biological diversity: genetic, species and ecosystem diversity",
          "Bio-geographic zones of India",
          "Biodiversity patterns and global biodiversity hot spots",
          "India as a mega-biodiversity nation",
          "Endangered and endemic species of India",
          "Threats to biodiversity: habitat loss, poaching of wildlife, human-wildlife conflicts and biological invasion",
          "Conservation of biodiversity: in-situ and ex-situ conservation",
          "Ecosystem and biodiversity services: ecological, economic, social, ethical, aesthetic and informational value"
        ]
      },
      {
        "number": 5,
        "name": "Environmental Pollution",
        "topics": [
          "Environmental pollution: types, causes, effects and control",
          "Air, water, soil and noise pollution",
          "Nuclear hazards and human health risks",
          "Solid waste management: control measures of urban and industrial wastes",
          "Pollution-related case studies"
        ]
      },
      {
        "number": 6,
        "name": "Environmental Policies and Practices",
        "topics": [
          "Climate change, global warming, ozone layer depletion and acid rain",
          "Impacts on human communities and agriculture",
          "Environment laws: Environment Protection Act",
          "Air (Prevention and Control of Pollution) Act",
          "Water (Prevention and Control of Pollution) Act",
          "Wildlife (Protection) Act",
          "Forest (Conservation) Act",
          "International agreements: Montreal and Kyoto Protocols",
          "Convention on Biological Diversity (CBD)",
          "Nature reserves, tribal population and rights, and human-wildlife conflicts in Indian context"
        ]
      },
      {
        "number": 7,
        "name": "Human Communities and the Environment",
        "topics": [
          "Human population growth: impacts on environment, human health and welfare",
          "Carbon footprint",
          "Resettlement and rehabilitation of project-affected persons; case studies",
          "Disaster management: floods, earthquakes, cyclones and landslides",
          "Environmental movements: Chipko, Silent Valley and Bishnois of Rajasthan",
          "Environmental ethics: role of Indian and other religions and cultures in environmental conservation",
          "Environmental communication and public awareness; case studies (e.g. CNG vehicles in Delhi)"
        ]
      },
      {
        "number": 8,
        "name": "Field Work",
        "topics": [
          "Visit to an area to document environmental assets: river, forest, flora/fauna, etc.",
          "Visit to a local polluted site: urban, rural, industrial or agricultural",
          "Study of common plants, insects and birds, and basic principles of identification",
          "Study of simple ecosystems: pond, river, Delhi Ridge, etc."
        ]
      }
    ]
  },
  {
    "id": "constitution-of-india",
    "name": "Constitution of India",
    "units": [
      {
        "number": 1,
        "name": "Introduction, Constitutionalism & Preamble",
        "topics": [
          "Constitutional supremacy",
          "Limited governance (constitutionalism)",
          "Philosophy and objectives set out in the Preamble"
        ]
      },
      {
        "number": 2,
        "name": "Fundamental Rights & Directive Principles",
        "topics": [
          "Equality",
          "Personal liberty",
          "Religious freedom",
          "Constitutional remedies (writs)",
          "Directive Principles of State Policy",
          "Socio-economic policy guidelines"
        ]
      },
      {
        "number": 3,
        "name": "Union & State Executive and Judiciary",
        "topics": [
          "Constitutional roles and powers of the President",
          "Constitutional roles and powers of the Governor",
          "Council of Ministers",
          "Appointment mechanisms of the Supreme Court and High Courts",
          "Jurisdictions of the Supreme Court and High Courts"
        ]
      },
      {
        "number": 4,
        "name": "Emergency Provisions & Constitutional Amendments",
        "topics": [
          "National emergency",
          "State emergency",
          "Financial emergency",
          "Effects of emergencies",
          "Formal amendment procedures under Article 368",
          "Basic Structure doctrine"
        ]
      }
    ]
  }
];
