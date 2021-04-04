const courseData = [
  {
    "courseName": "Clinical Research",
    "instructor": "Arti Dhar",
    "code": "PHA G543",
    "year": 2020,
    "sem": 1,
    "id": 354
  },
  {
    "courseName": "Advanced Digital Communi",
    "instructor": "Prashant K Wali",
    "code": "EEE G622",
    "year": 2020,
    "sem": 1,
    "id": 219
  },
  {
    "courseName": "Adv Foundation Engg",
    "instructor": "Anasua Guharay",
    "code": "CE G620",
    "year": 2020,
    "sem": 1,
    "id": 92
  },
  {
    "courseName": "Mobile Personal Communic",
    "instructor": "Amit Ranjan Azad",
    "code": "EEE G592",
    "year": 2020,
    "sem": 1,
    "id": 218
  },
  {
    "courseName": "Earthquake Engineering",
    "instructor": "Mohan S C",
    "code": "CE G615",
    "year": 2020,
    "sem": 1,
    "id": 91
  },
  {
    "courseName": "Stem Cell & Regener Bio",
    "instructor": "Vivek Sharma",
    "code": "BIO G515",
    "year": 2020,
    "sem": 1,
    "id": 16
  },
  {
    "courseName": "Advanced Cell Mole Bio",
    "instructor": "Piyush Khandelia",
    "code": "BIO G542",
    "year": 2020,
    "sem": 1,
    "id": 18
  },
  {
    "courseName": "Analog Ic Design",
    "instructor": "Saroj Mondal",
    "code": "MEL G632",
    "year": 2020,
    "sem": 1,
    "id": 320
  },
  {
    "courseName": "Structural Optimization",
    "instructor": "Vasan Arunachalam",
    "code": "CE G514",
    "year": 2020,
    "sem": 1,
    "id": 84
  },
  {
    "courseName": "Pavement Analysis & Des",
    "instructor": "Sridhar R",
    "code": "CE G518",
    "year": 2020,
    "sem": 1,
    "id": 85
  },
  {
    "courseName": "Comp Aided Anal & Design",
    "instructor": "Srinivas Prakash Regalla",
    "code": "ME G611",
    "year": 2020,
    "sem": 1,
    "id": 318
  },
  {
    "courseName": "Q A & Regulatory Affairs",
    "instructor": "Akash Chaurasiya",
    "code": "PHA G532",
    "year": 2020,
    "sem": 1,
    "id": 353
  },
  {
    "courseName": "Comput Fluid Dynamics",
    "instructor": "Gurugubelli Venkata Pradha Saradhi",
    "code": "ME G515",
    "year": 2020,
    "sem": 1,
    "id": 315
  },
  {
    "courseName": "Fracture Mechanics",
    "instructor": "Nitin Kotkunde",
    "code": "DE G514",
    "year": 2020,
    "sem": 1,
    "id": 160
  },
  {
    "courseName": "Rf Microelectronics",
    "instructor": "Sourav Nandi",
    "code": "EEE G510",
    "year": 2020,
    "sem": 1,
    "id": 217
  },
  {
    "courseName": "Cad For Ic Design",
    "instructor": "Sumit Kumar Chatterjee",
    "code": "MEL G641",
    "year": 2020,
    "sem": 1,
    "id": 321
  },
  {
    "courseName": "Advanced Vlsi Design",
    "instructor": "Surya Shankar Dan",
    "code": "MEL G623",
    "year": 2020,
    "sem": 1,
    "id": 319
  },
  {
    "courseName": "Network Security",
    "instructor": "Rajib Ranjan Maiti",
    "code": "CS G513",
    "year": 2020,
    "sem": 1,
    "id": 153
  },
  {
    "courseName": "Pharma Admin & Mgmt",
    "instructor": "Akash Chaurasiya",
    "code": "PHA G616",
    "year": 2020,
    "sem": 1,
    "id": 357
  },
  {
    "courseName": "Ph D Seminar",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS C797T",
    "year": 2020,
    "sem": 1,
    "id": 23
  },
  {
    "courseName": "Distributed Data Systems",
    "instructor": "Manik Gupta",
    "code": "CS G554",
    "year": 2020,
    "sem": 1,
    "id": 158
  },
  {
    "courseName": "Study In Advanced Topics",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS G513",
    "year": 2020,
    "sem": 1,
    "id": 54
  },
  {
    "courseName": "Independent Study",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS C790T",
    "year": 2020,
    "sem": 1,
    "id": 21
  },
  {
    "courseName": "Ph D Thesis",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS C799T",
    "year": 2020,
    "sem": 1,
    "id": 24
  },
  {
    "courseName": "Computational Geometry",
    "instructor": "Manjanna B",
    "code": "CS F402",
    "year": 2020,
    "sem": 1,
    "id": 147
  },
  {
    "courseName": "Teaching Practice I",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS C791T",
    "year": 2020,
    "sem": 1,
    "id": 22
  },
  {
    "courseName": "Adv Concrete Structures",
    "instructor": "Bahurudeen A",
    "code": "CE G613",
    "year": 2020,
    "sem": 1,
    "id": 90
  },
  {
    "courseName": "Dosage Form Design",
    "instructor": "Punna Rao Ravi",
    "code": "PHA G632",
    "year": 2020,
    "sem": 1,
    "id": 358
  },
  {
    "courseName": "Reaction Engineering",
    "instructor": "Srikanta Dinda",
    "code": "CHE G641",
    "year": 2020,
    "sem": 1,
    "id": 111
  },
  {
    "courseName": "Research Project I",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS G529",
    "year": 2020,
    "sem": 1,
    "id": 55
  },
  {
    "courseName": "Research Project II",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS G539",
    "year": 2020,
    "sem": 1,
    "id": 56
  },
  {
    "courseName": "Dissertation",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS G629T",
    "year": 2020,
    "sem": 1,
    "id": 60
  },
  {
    "courseName": "Reading Course",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS G649",
    "year": 2020,
    "sem": 1,
    "id": 62
  },
  {
    "courseName": "Practice School",
    "instructor": "Srinivas Prakash Regalla",
    "code": "BITS G639",
    "year": 2020,
    "sem": 1,
    "id": 61
  },
  {
    "courseName": "Vlsi Architecture",
    "instructor": "Ershad Ahmed S",
    "code": "MEL G642",
    "year": 2020,
    "sem": 1,
    "id": 322
  },
  {
    "courseName": "Polymer Technology",
    "instructor": "Karthik Chetan V",
    "code": "CHE G522",
    "year": 2020,
    "sem": 1,
    "id": 107
  },
  {
    "courseName": "Practice Lect Series I",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS E793T",
    "year": 2020,
    "sem": 1,
    "id": 27
  },
  {
    "courseName": "Hardware Software Co-Dsn",
    "instructor": "Soumya J",
    "code": "EEE G626",
    "year": 2020,
    "sem": 1,
    "id": 220
  },
  {
    "courseName": "Pharmaceutical Biotech",
    "instructor": "Nirmal J",
    "code": "PHA G613",
    "year": 2020,
    "sem": 1,
    "id": 356
  },
  {
    "courseName": "Plant Biotechnology",
    "instructor": "Gireesha Thipperudrappa Mohannath",
    "code": "BIO G643",
    "year": 2020,
    "sem": 1,
    "id": 19
  },
  {
    "courseName": "Biology Laboratory",
    "instructor": "Vidya Rajesh",
    "code": "BIO F110",
    "year": 2020,
    "sem": 1,
    "id": 0
  },
  {
    "courseName": "General Biology",
    "instructor": "Kuamr Pranav Narayan",
    "code": "BIO F111",
    "year": 2020,
    "sem": 1,
    "id": 1
  },
  {
    "courseName": "Engineering Graphics",
    "instructor": "Bandhan Bandhu Majumdar",
    "code": "BITS F110",
    "year": 2020,
    "sem": 1,
    "id": 28
  },
  {
    "courseName": "Thermodynamics",
    "instructor": "I Sreedhar",
    "code": "BITS F111",
    "year": 2020,
    "sem": 1,
    "id": 29
  },
  {
    "courseName": "Technical Report Writing",
    "instructor": "Jayesh A K",
    "code": "BITS F112",
    "year": 2020,
    "sem": 1,
    "id": 30
  },
  {
    "courseName": "Chemistry Laboratory",
    "instructor": "Chanchal Chakraborty",
    "code": "CHEM F110",
    "year": 2020,
    "sem": 1,
    "id": 112
  },
  {
    "courseName": "General Chemistry",
    "instructor": "Manab Chakravarthy",
    "code": "CHEM F111",
    "year": 2020,
    "sem": 1,
    "id": 113
  },
  {
    "courseName": "Computer Programming",
    "instructor": "Chittaranjan Hota",
    "code": "CS F111",
    "year": 2020,
    "sem": 1,
    "id": 132
  },
  {
    "courseName": "Electrical Sciences",
    "instructor": "Srimath Tirumala Pallerlamudi Srinivas",
    "code": "EEE F111",
    "year": 2020,
    "sem": 1,
    "id": 196
  },
  {
    "courseName": "Mathematics II",
    "instructor": "Deepika",
    "code": "MATH F112",
    "year": 2020,
    "sem": 1,
    "id": 263
  },
  {
    "courseName": "Probability & Statistics",
    "instructor": "N Kishore Kumar",
    "code": "MATH F113",
    "year": 2020,
    "sem": 1,
    "id": 264
  },
  {
    "courseName": "Workshop Practice",
    "instructor": "Kundan Kumar Singh",
    "code": "ME F110",
    "year": 2020,
    "sem": 1,
    "id": 287
  },
  {
    "courseName": "Physics Laboratory",
    "instructor": "Rahul Nigam",
    "code": "PHY F110",
    "year": 2020,
    "sem": 1,
    "id": 359
  },
  {
    "courseName": "Mech Oscillations & Wave",
    "instructor": "P K Thiruvikraman",
    "code": "PHY F111",
    "year": 2020,
    "sem": 1,
    "id": 360
  },
  {
    "courseName": "Principles Of Economics",
    "instructor": "Archana Srivastava",
    "code": "ECON F211",
    "year": 2020,
    "sem": 1,
    "id": 173
  },
  {
    "courseName": "Principles Of Management",
    "instructor": "Swati Alok",
    "code": "MGTS F211",
    "year": 2020,
    "sem": 1,
    "id": 333
  },
  {
    "courseName": "Electrical Machines",
    "instructor": "Mithun Mondal",
    "code": "EEE F211",
    "year": 2020,
    "sem": 1,
    "id": 197
  },
  {
    "courseName": "Anatomy Physio & Hygiene",
    "instructor": "Arti Dhar",
    "code": "PHA F214",
    "year": 2020,
    "sem": 1,
    "id": 337
  },
  {
    "courseName": "Dispensing Pharmacy",
    "instructor": "D Sriram",
    "code": "PHA F212",
    "year": 2020,
    "sem": 1,
    "id": 336
  },
  {
    "courseName": "Object Oriented Prog",
    "instructor": "Subhrakanta Panda",
    "code": "CS F213",
    "year": 2020,
    "sem": 1,
    "id": 135
  },
  {
    "courseName": "Data Structures & Algo",
    "instructor": "Venkatakrishnan Ramaswamy",
    "code": "CS F211",
    "year": 2020,
    "sem": 1,
    "id": 133
  },
  {
    "courseName": "Database Systems",
    "instructor": "R Gururaj",
    "code": "CS F212",
    "year": 2020,
    "sem": 1,
    "id": 134
  },
  {
    "courseName": "Electrical Machines",
    "instructor": "Mithun Mondal",
    "code": "INSTR F211",
    "year": 2020,
    "sem": 1,
    "id": 248
  },
  {
    "courseName": "Microbiology",
    "instructor": "Ruchi Jain Dey",
    "code": "BIO F212",
    "year": 2020,
    "sem": 1,
    "id": 2
  },
  {
    "courseName": "Funda Of Fin And Account",
    "instructor": "Niranjan Swain",
    "code": "ECON F212",
    "year": 2020,
    "sem": 1,
    "id": 174
  },
  {
    "courseName": "Discrete Mathematics",
    "instructor": "Pradyumn Kumar Sahoo",
    "code": "MATH F213",
    "year": 2020,
    "sem": 1,
    "id": 265
  },
  {
    "courseName": "Elec Magnet & Optics Lab",
    "instructor": "Subhash Narayan Karbelkar",
    "code": "PHY F214",
    "year": 2020,
    "sem": 1,
    "id": 361
  },
  {
    "courseName": "Environ Dev & Climate Ch",
    "instructor": "Biswanath Dash",
    "code": "GS F212",
    "year": 2020,
    "sem": 1,
    "id": 225
  },
  {
    "courseName": "Criti Anal Of Lit & Cine",
    "instructor": "Prasuna M G",
    "code": "GS F322",
    "year": 2020,
    "sem": 1,
    "id": 228
  },
  {
    "courseName": "Cinematic Adaptation",
    "instructor": "Shilpaa Anand",
    "code": "HSS F325",
    "year": 2020,
    "sem": 1,
    "id": 240
  },
  {
    "courseName": "Creative Writing",
    "instructor": "Anhiti Patnaik",
    "code": "GS F241",
    "year": 2020,
    "sem": 1,
    "id": 227
  },
  {
    "courseName": "Introductory Psychology",
    "instructor": "Santosh Mahapatra",
    "code": "GS F232",
    "year": 2020,
    "sem": 1,
    "id": 226
  },
  {
    "courseName": "Public Administration",
    "instructor": "Lavanya Suresh",
    "code": "GS F333",
    "year": 2020,
    "sem": 1,
    "id": 229
  },
  {
    "courseName": "Heat Transfer",
    "instructor": "Ved Prakash Mishra",
    "code": "CHE F241",
    "year": 2020,
    "sem": 1,
    "id": 93
  },
  {
    "courseName": "Num Method For Chem Engg",
    "instructor": "Arnab Dutta",
    "code": "CHE F242",
    "year": 2020,
    "sem": 1,
    "id": 94
  },
  {
    "courseName": "Material Science & Engg",
    "instructor": "D Purnima",
    "code": "CHE F243",
    "year": 2020,
    "sem": 1,
    "id": 95
  },
  {
    "courseName": "Separation Processes I",
    "instructor": "Satyapaul Singh Amarthaluri",
    "code": "CHE F244",
    "year": 2020,
    "sem": 1,
    "id": 96
  },
  {
    "courseName": "Chemical Engg Lab I",
    "instructor": "Satyapaul Singh Amarthaluri",
    "code": "CHE F312",
    "year": 2020,
    "sem": 1,
    "id": 98
  },
  {
    "courseName": "Chemical Engg Lab II",
    "instructor": "Srikanta Dinda",
    "code": "CHE F341",
    "year": 2020,
    "sem": 1,
    "id": 99
  },
  {
    "courseName": "Process Des Principle II",
    "instructor": "Pankaj Kumar",
    "code": "CHE F343",
    "year": 2020,
    "sem": 1,
    "id": 100
  },
  {
    "courseName": "Analysis Of Structures",
    "instructor": "Chandu Parimi",
    "code": "CE F241",
    "year": 2020,
    "sem": 1,
    "id": 64
  },
  {
    "courseName": "Construction Plan & Tech",
    "instructor": "Vasan Arunachalam",
    "code": "CE F242",
    "year": 2020,
    "sem": 1,
    "id": 65
  },
  {
    "courseName": "Soil Mechanics",
    "instructor": "Anasua Guharay",
    "code": "CE F243",
    "year": 2020,
    "sem": 1,
    "id": 66
  },
  {
    "courseName": "Highway Engineering",
    "instructor": "V R Vinayaka Ram",
    "code": "CE F244",
    "year": 2020,
    "sem": 1,
    "id": 67
  },
  {
    "courseName": "Water & Wastewater Treat",
    "instructor": "R R Varma Murari",
    "code": "CE F342",
    "year": 2020,
    "sem": 1,
    "id": 70
  },
  {
    "courseName": "Des Of Steel Structures",
    "instructor": "P N K Rao",
    "code": "CE F343",
    "year": 2020,
    "sem": 1,
    "id": 71
  },
  {
    "courseName": "Envir Pollution Control",
    "instructor": "Jaideep Chatterjee",
    "code": "CHE F411",
    "year": 2020,
    "sem": 1,
    "id": 105
  },
  {
    "courseName": "Airport Rail & Waterways",
    "instructor": "Bandhan Bandhu Majumdar",
    "code": "CE F425",
    "year": 2020,
    "sem": 1,
    "id": 79
  },
  {
    "courseName": "Structural Dynamics",
    "instructor": "Chandu Parimi",
    "code": "CE F432",
    "year": 2020,
    "sem": 1,
    "id": 81
  },
  {
    "courseName": "Des Of Prest Conc Struct",
    "instructor": "Bahurudeen A",
    "code": "CE F415",
    "year": 2020,
    "sem": 1,
    "id": 76
  },
  {
    "courseName": "Earthquake Res Des & Con",
    "instructor": "Shivang Shekhar",
    "code": "CE F428",
    "year": 2020,
    "sem": 1,
    "id": 80
  },
  {
    "courseName": "Comp Appl In Civil Engg",
    "instructor": "Arkamitra Kar",
    "code": "CE F416",
    "year": 2020,
    "sem": 1,
    "id": 77
  },
  {
    "courseName": "Intro  To Bridge Engg",
    "instructor": "P N K Rao",
    "code": "CE F420",
    "year": 2020,
    "sem": 1,
    "id": 78
  },
  {
    "courseName": "Introduction To Fem",
    "instructor": "Anamala Jagadeesh",
    "code": "CE F435",
    "year": 2020,
    "sem": 1,
    "id": 82
  },
  {
    "courseName": "Multicri De Mak In E & M",
    "instructor": "Srinivasa Raju K",
    "code": "BITS F313",
    "year": 2020,
    "sem": 1,
    "id": 34
  },
  {
    "courseName": "Microproc & Interfacing",
    "instructor": "Runa Kumari",
    "code": "EEE F241",
    "year": 2020,
    "sem": 1,
    "id": 198
  },
  {
    "courseName": "Microelectronic Circuits",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "EEE F244",
    "year": 2020,
    "sem": 1,
    "id": 199
  },
  {
    "courseName": "Communication Systems",
    "instructor": "Gopal Krishna Kamath M",
    "code": "EEE F311",
    "year": 2020,
    "sem": 1,
    "id": 203
  },
  {
    "courseName": "Analog Electronics",
    "instructor": "Ponnalagu",
    "code": "EEE F341",
    "year": 2020,
    "sem": 1,
    "id": 204
  },
  {
    "courseName": "Power Electronics",
    "instructor": "Sudha Radhika",
    "code": "EEE F342",
    "year": 2020,
    "sem": 1,
    "id": 205
  },
  {
    "courseName": "Introduction To Mems",
    "instructor": "Sanket Goel",
    "code": "BITS F415",
    "year": 2020,
    "sem": 1,
    "id": 42
  },
  {
    "courseName": "Modern Control Systems",
    "instructor": "Alivelu Manga Parimi",
    "code": "EEE F422",
    "year": 2020,
    "sem": 1,
    "id": 211
  },
  {
    "courseName": "Digital Signal Process",
    "instructor": "Subhendu Kumar Sahoo",
    "code": "EEE F434",
    "year": 2020,
    "sem": 1,
    "id": 213
  },
  {
    "courseName": "Fibre Optics & Optoelect",
    "instructor": "Prasant Kumar Pattnaik",
    "code": "EEE F426",
    "year": 2020,
    "sem": 1,
    "id": 212
  },
  {
    "courseName": "Machine Design & Drawing",
    "instructor": "Nitin Kotkunde",
    "code": "ME F241",
    "year": 2020,
    "sem": 1,
    "id": 292
  },
  {
    "courseName": "Ic Engines",
    "instructor": "Khalid Anwar",
    "code": "ME F242",
    "year": 2020,
    "sem": 1,
    "id": 293
  },
  {
    "courseName": "Production Techniques I",
    "instructor": "N Suresh Kumar Reddy",
    "code": "ME F243",
    "year": 2020,
    "sem": 1,
    "id": 294
  },
  {
    "courseName": "Kin & Dyn Of Machines",
    "instructor": "Y V Daseswara Rao",
    "code": "ME F244",
    "year": 2020,
    "sem": 1,
    "id": 295
  },
  {
    "courseName": "Heat Transfer",
    "instructor": "Nandanavanam Jalaiah",
    "code": "ME F311",
    "year": 2020,
    "sem": 1,
    "id": 297
  },
  {
    "courseName": "Production Techniques II",
    "instructor": "Amrita Priyadarshini",
    "code": "ME F313",
    "year": 2020,
    "sem": 1,
    "id": 298
  },
  {
    "courseName": "Primemovers & Fluid Mach",
    "instructor": "Jeevan Jaidi",
    "code": "ME F341",
    "year": 2020,
    "sem": 1,
    "id": 299
  },
  {
    "courseName": "Mechanical Vibrations",
    "instructor": "Sabareesh Geetha Rajasekharan",
    "code": "ME F343",
    "year": 2020,
    "sem": 1,
    "id": 301
  },
  {
    "courseName": "Computer Aided Design",
    "instructor": "Srinivas Prakash Regalla",
    "code": "ME F342",
    "year": 2020,
    "sem": 1,
    "id": 300
  },
  {
    "courseName": "Engineering Optimization",
    "instructor": "Dheeraj Agarwal",
    "code": "ME F344",
    "year": 2020,
    "sem": 1,
    "id": 302
  },
  {
    "courseName": "Composite Material & Des",
    "instructor": "Phaneendra Kiran Chaganti",
    "code": "ME F452",
    "year": 2020,
    "sem": 1,
    "id": 309
  },
  {
    "courseName": "Refrigeration & Aircond",
    "instructor": "S S Deshmukh",
    "code": "ME F461",
    "year": 2020,
    "sem": 1,
    "id": 310
  },
  {
    "courseName": "Pharmaceutical Chemistry",
    "instructor": "D Sriram",
    "code": "PHA F241",
    "year": 2020,
    "sem": 1,
    "id": 338
  },
  {
    "courseName": "Biological Chemistry",
    "instructor": "Balaram Ghosh",
    "code": "PHA F242",
    "year": 2020,
    "sem": 1,
    "id": 339
  },
  {
    "courseName": "Pharmacology II",
    "instructor": "Onkar Prakash Kulkarni",
    "code": "PHA F341",
    "year": 2020,
    "sem": 1,
    "id": 342
  },
  {
    "courseName": "Medicinal Chemistry II",
    "instructor": "P Yogeeswari",
    "code": "PHA F342",
    "year": 2020,
    "sem": 1,
    "id": 343
  },
  {
    "courseName": "Instru Methods Of Anal",
    "instructor": "A Sajeli Begum",
    "code": "PHA F313",
    "year": 2020,
    "sem": 1,
    "id": 341
  },
  {
    "courseName": "Forensic Pharmacy",
    "instructor": "Balaram Ghosh",
    "code": "PHA F343",
    "year": 2020,
    "sem": 1,
    "id": 344
  },
  {
    "courseName": "Natural Drugs",
    "instructor": "A Sajeli Begum",
    "code": "PHA F344",
    "year": 2020,
    "sem": 1,
    "id": 345
  },
  {
    "courseName": "Pharma Mang & Qual Contr",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "PHA F413",
    "year": 2020,
    "sem": 1,
    "id": 350
  },
  {
    "courseName": "Biopharmaceutics",
    "instructor": "Nirmal J",
    "code": "PHA F414",
    "year": 2020,
    "sem": 1,
    "id": 351
  },
  {
    "courseName": "Pathophysiology",
    "instructor": "Onkar Prakash Kulkarni",
    "code": "PHA F415",
    "year": 2020,
    "sem": 1,
    "id": 352
  },
  {
    "courseName": "Microproc & Interfacing",
    "instructor": "Runa Kumari",
    "code": "CS F241",
    "year": 2020,
    "sem": 1,
    "id": 136
  },
  {
    "courseName": "Operating Systems",
    "instructor": "Barsha Mitra",
    "code": "CS F372",
    "year": 2020,
    "sem": 1,
    "id": 144
  },
  {
    "courseName": "Computer Architecture",
    "instructor": "Chetan Kumar Vudadha",
    "code": "CS F342",
    "year": 2020,
    "sem": 1,
    "id": 139
  },
  {
    "courseName": "Compiler Construction",
    "instructor": "Aruna Malapati",
    "code": "CS F363",
    "year": 2020,
    "sem": 1,
    "id": 140
  },
  {
    "courseName": "Design & Anal Of Algo",
    "instructor": "Tathagata Ray",
    "code": "CS F364",
    "year": 2020,
    "sem": 1,
    "id": 141
  },
  {
    "courseName": "Computer Networks",
    "instructor": "Dipanjan Chakraborty",
    "code": "CS F303",
    "year": 2020,
    "sem": 1,
    "id": 138
  },
  {
    "courseName": "Data Mining",
    "instructor": "Lov Kumar",
    "code": "CS F415",
    "year": 2020,
    "sem": 1,
    "id": 150
  },
  {
    "courseName": "Sel Topics From Comp Sc",
    "instructor": "Paresh Saxena",
    "code": "CS F441",
    "year": 2020,
    "sem": 1,
    "id": 151
  },
  {
    "courseName": "Internetworking Tech",
    "instructor": "Suvadip Batabyal",
    "code": "CS F413",
    "year": 2020,
    "sem": 1,
    "id": 149
  },
  {
    "courseName": "Discrete Maths Struc",
    "instructor": "Sabyasachi Dey",
    "code": "MATH F441",
    "year": 2020,
    "sem": 1,
    "id": 284
  },
  {
    "courseName": "Network Programming",
    "instructor": "Paresh Saxena",
    "code": "IS F462",
    "year": 2020,
    "sem": 1,
    "id": 262
  },
  {
    "courseName": "Artificial Intelligence",
    "instructor": "Chittaranjan Hota",
    "code": "CS F407",
    "year": 2020,
    "sem": 1,
    "id": 148
  },
  {
    "courseName": "Human Comp Interaction",
    "instructor": "Dipanjan Chakraborty",
    "code": "BITS F364",
    "year": 2020,
    "sem": 1,
    "id": 38
  },
  {
    "courseName": "Cryptography",
    "instructor": "G Geethakumari",
    "code": "BITS F463",
    "year": 2020,
    "sem": 1,
    "id": 51
  },
  {
    "courseName": "Machine Learning",
    "instructor": "N L Bhanu Murthy",
    "code": "BITS F464",
    "year": 2020,
    "sem": 1,
    "id": 52
  },
  {
    "courseName": "Number Theory",
    "instructor": "Rohit Gupta",
    "code": "MATH F231",
    "year": 2020,
    "sem": 1,
    "id": 266
  },
  {
    "courseName": "Microproc & Interfacing",
    "instructor": "Runa Kumari",
    "code": "INSTR F241",
    "year": 2020,
    "sem": 1,
    "id": 249
  },
  {
    "courseName": "Microelectronic Circuits",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "INSTR F244",
    "year": 2020,
    "sem": 1,
    "id": 250
  },
  {
    "courseName": "Electro Inst & Inst Tech",
    "instructor": "Karumbaiah C N",
    "code": "INSTR F311",
    "year": 2020,
    "sem": 1,
    "id": 252
  },
  {
    "courseName": "Analog Electronics",
    "instructor": "Ponnalagu",
    "code": "INSTR F341",
    "year": 2020,
    "sem": 1,
    "id": 253
  },
  {
    "courseName": "Power Electronics",
    "instructor": "Sudha Radhika",
    "code": "INSTR F342",
    "year": 2020,
    "sem": 1,
    "id": 254
  },
  {
    "courseName": "Virtual Instrumentation",
    "instructor": "Rajesh Kumar Tripathy",
    "code": "INSTR F419",
    "year": 2020,
    "sem": 1,
    "id": 259
  },
  {
    "courseName": "Nanobiotechnology",
    "instructor": "Suman Kapur",
    "code": "BIOT F422",
    "year": 2020,
    "sem": 1,
    "id": 20
  },
  {
    "courseName": "Bioethics & Biosafety",
    "instructor": "Pragya Komal",
    "code": "BITS F467",
    "year": 2020,
    "sem": 1,
    "id": 53
  },
  {
    "courseName": "Electrical Machines",
    "instructor": "Mithun Mondal",
    "code": "ECE F211",
    "year": 2020,
    "sem": 1,
    "id": 161
  },
  {
    "courseName": "Microproc & Interfacing",
    "instructor": "Runa Kumari",
    "code": "ECE F241",
    "year": 2020,
    "sem": 1,
    "id": 162
  },
  {
    "courseName": "Microelectronic Circuits",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "ECE F244",
    "year": 2020,
    "sem": 1,
    "id": 163
  },
  {
    "courseName": "Communication Systems",
    "instructor": "Gopal Krishna Kamath M",
    "code": "ECE F311",
    "year": 2020,
    "sem": 1,
    "id": 165
  },
  {
    "courseName": "Analog Electronics",
    "instructor": "Ponnalagu",
    "code": "ECE F341",
    "year": 2020,
    "sem": 1,
    "id": 167
  },
  {
    "courseName": "Digital Signal Process",
    "instructor": "Subhendu Kumar Sahoo",
    "code": "ECE F434",
    "year": 2020,
    "sem": 1,
    "id": 172
  },
  {
    "courseName": "Mechatronics & Automat",
    "instructor": "Arshad Javed",
    "code": "MF F311",
    "year": 2020,
    "sem": 1,
    "id": 324
  },
  {
    "courseName": "Casting & Welding",
    "instructor": "Sujith R",
    "code": "MF F343",
    "year": 2020,
    "sem": 1,
    "id": 325
  },
  {
    "courseName": "Lean Manufacturing",
    "instructor": "Amit Kumar Gupta",
    "code": "MF F418",
    "year": 2020,
    "sem": 1,
    "id": 330
  },
  {
    "courseName": "Supply Chain Management",
    "instructor": "Phaneendra Kiran Chaganti",
    "code": "MF F421",
    "year": 2020,
    "sem": 1,
    "id": 331
  },
  {
    "courseName": "Biophysics",
    "instructor": "Ramakrishna Vadrevu",
    "code": "BIO F215",
    "year": 2020,
    "sem": 1,
    "id": 3
  },
  {
    "courseName": "Ecology & Environ Sci",
    "instructor": "Sankar Ganesh P",
    "code": "BIO F241",
    "year": 2020,
    "sem": 1,
    "id": 5
  },
  {
    "courseName": "Genetics",
    "instructor": "K Naga Mohan",
    "code": "BIO F243",
    "year": 2020,
    "sem": 1,
    "id": 6
  },
  {
    "courseName": "Instru Methods Of Anal",
    "instructor": "Debashree Bandyopadhyay",
    "code": "BIO F244",
    "year": 2020,
    "sem": 1,
    "id": 7
  },
  {
    "courseName": "Developmental Biology",
    "instructor": "Vivek Sharma",
    "code": "BIO F341",
    "year": 2020,
    "sem": 1,
    "id": 9
  },
  {
    "courseName": "Immunology",
    "instructor": "Kirtimaan Syal",
    "code": "BIO F342",
    "year": 2020,
    "sem": 1,
    "id": 10
  },
  {
    "courseName": "Bioprocess Technology",
    "instructor": "Shuvadeep Maity",
    "code": "BIO F451",
    "year": 2020,
    "sem": 1,
    "id": 15
  },
  {
    "courseName": "Econometric Methods",
    "instructor": "Bheemeshwar Reddy A",
    "code": "ECON F241",
    "year": 2020,
    "sem": 1,
    "id": 175
  },
  {
    "courseName": "Microeconomics",
    "instructor": "Dushyant Kumar",
    "code": "ECON F242",
    "year": 2020,
    "sem": 1,
    "id": 176
  },
  {
    "courseName": "Macroeconomics",
    "instructor": "Sunny Kumar Singh",
    "code": "ECON F243",
    "year": 2020,
    "sem": 1,
    "id": 177
  },
  {
    "courseName": "Economic Of Growth & Dev",
    "instructor": "Bheemeshwar Reddy A",
    "code": "ECON F244",
    "year": 2020,
    "sem": 1,
    "id": 178
  },
  {
    "courseName": "Public Fin Theo & Policy",
    "instructor": "Mini Thomas P",
    "code": "ECON F341",
    "year": 2020,
    "sem": 1,
    "id": 181
  },
  {
    "courseName": "Applied Econometrics",
    "instructor": "Rishi Kumar",
    "code": "ECON F342",
    "year": 2020,
    "sem": 1,
    "id": 182
  },
  {
    "courseName": "Economic Anal Of Pub Pol",
    "instructor": "Durgesh Chandra Pathak",
    "code": "ECON F343",
    "year": 2020,
    "sem": 1,
    "id": 183
  },
  {
    "courseName": "Mathematical Methods",
    "instructor": "Santanu Koley",
    "code": "MATH F241",
    "year": 2020,
    "sem": 1,
    "id": 267
  },
  {
    "courseName": "Operations Research",
    "instructor": "Dipak Kr Satpathi",
    "code": "MATH F242",
    "year": 2020,
    "sem": 1,
    "id": 268
  },
  {
    "courseName": "Graphs And Networks",
    "instructor": "Michael Alphonse",
    "code": "MATH F243",
    "year": 2020,
    "sem": 1,
    "id": 269
  },
  {
    "courseName": "Measure & Integration",
    "instructor": "K Bhargav Kumar",
    "code": "MATH F244",
    "year": 2020,
    "sem": 1,
    "id": 270
  },
  {
    "courseName": "Intro To Functional Anal",
    "instructor": "Jhuma Sen Gupta",
    "code": "MATH F341",
    "year": 2020,
    "sem": 1,
    "id": 273
  },
  {
    "courseName": "Differential Geometry",
    "instructor": "Sumit Kumar Vishwakarma",
    "code": "MATH F342",
    "year": 2020,
    "sem": 1,
    "id": 274
  },
  {
    "courseName": "Partial Diff Equations",
    "instructor": "Gujji Murali Mohan Reddy",
    "code": "MATH F343",
    "year": 2020,
    "sem": 1,
    "id": 275
  },
  {
    "courseName": "Algebra II",
    "instructor": "Pratyusha Chattopadhyay",
    "code": "MATH F314",
    "year": 2020,
    "sem": 1,
    "id": 272
  },
  {
    "courseName": "Nonlinear Optimization",
    "instructor": "Venkata Ratnam K",
    "code": "MATH F471",
    "year": 2020,
    "sem": 1,
    "id": 286
  },
  {
    "courseName": "Complex Analysis",
    "instructor": "Nijjwal Karak",
    "code": "MATH F354",
    "year": 2020,
    "sem": 1,
    "id": 277
  },
  {
    "courseName": "Statistical Infer & App",
    "instructor": "Farida Parvez Barbhuiya",
    "code": "MATH F353",
    "year": 2020,
    "sem": 1,
    "id": 276
  },
  {
    "courseName": "Combinatorial Maths",
    "instructor": "Debopam Chakraborty",
    "code": "MATH F421",
    "year": 2020,
    "sem": 1,
    "id": 282
  },
  {
    "courseName": "Electromagnetic Theo II",
    "instructor": "Sarmistha Banik",
    "code": "PHY F241",
    "year": 2020,
    "sem": 1,
    "id": 362
  },
  {
    "courseName": "Math Method Of Physics",
    "instructor": "Subhash Narayan Karbelkar",
    "code": "PHY F243",
    "year": 2020,
    "sem": 1,
    "id": 363
  },
  {
    "courseName": "Statistical Mechanics",
    "instructor": "Souri Banerjee",
    "code": "PHY F312",
    "year": 2020,
    "sem": 1,
    "id": 365
  },
  {
    "courseName": "Solid State Physics",
    "instructor": "Aravinda N Raghavan",
    "code": "PHY F341",
    "year": 2020,
    "sem": 1,
    "id": 367
  },
  {
    "courseName": "Atomic & Molecular Phy",
    "instructor": "Aranya Bhuti Bhattacharjee",
    "code": "PHY F342",
    "year": 2020,
    "sem": 1,
    "id": 368
  },
  {
    "courseName": "Nuclear & Particle Phy",
    "instructor": "Asrarul Haque",
    "code": "PHY F343",
    "year": 2020,
    "sem": 1,
    "id": 369
  },
  {
    "courseName": "Advanced Physics Lab",
    "instructor": "Kannan Ramaswamy",
    "code": "PHY F344",
    "year": 2020,
    "sem": 1,
    "id": 370
  },
  {
    "courseName": "Theory Of Relativity",
    "instructor": "Swastik Bhattacharya",
    "code": "PHY F315",
    "year": 2020,
    "sem": 1,
    "id": 366
  },
  {
    "courseName": "Quantum Optics",
    "instructor": "K V S Shiv Chaitanya",
    "code": "PHY F420",
    "year": 2020,
    "sem": 1,
    "id": 376
  },
  {
    "courseName": "Adv Math Methods Of Phy",
    "instructor": "Rahul Nigam",
    "code": "PHY F425",
    "year": 2020,
    "sem": 1,
    "id": 377
  },
  {
    "courseName": "Intro To Gender Studies",
    "instructor": "Aswathy Raveendran",
    "code": "BITS F385",
    "year": 2020,
    "sem": 1,
    "id": 39
  },
  {
    "courseName": "Software Engineering",
    "instructor": "Narasimha Bolloju",
    "code": "IS F341",
    "year": 2020,
    "sem": 1,
    "id": 261
  },
  {
    "courseName": "Computer Graphics",
    "instructor": "Tathagata Ray",
    "code": "IS F311",
    "year": 2020,
    "sem": 1,
    "id": 260
  },
  {
    "courseName": "Derivatives &  Risk Mgmt",
    "instructor": "Shreya Biswas",
    "code": "FIN F311",
    "year": 2020,
    "sem": 1,
    "id": 221
  },
  {
    "courseName": "Financial Management",
    "instructor": "Niranjan Swain",
    "code": "FIN F315",
    "year": 2020,
    "sem": 1,
    "id": 223
  },
  {
    "courseName": "Secur Anal & Portfol Mgt",
    "instructor": "Shreya Biswas",
    "code": "FIN F313",
    "year": 2020,
    "sem": 1,
    "id": 222
  },
  {
    "courseName": "Buss Anal & Valuation",
    "instructor": "Nivedita Sinha",
    "code": "ECON F355",
    "year": 2020,
    "sem": 1,
    "id": 186
  },
  {
    "courseName": "Project Appraisal",
    "instructor": "Sunny Kumar Singh",
    "code": "ECON F411",
    "year": 2020,
    "sem": 1,
    "id": 191
  },
  {
    "courseName": "New Venture Creation",
    "instructor": "Raghunathan Rajasekaran",
    "code": "ECON F415",
    "year": 2020,
    "sem": 1,
    "id": 193
  },
  {
    "courseName": "Inorganic Chemistry II",
    "instructor": "Sounak Roy",
    "code": "CHEM F241",
    "year": 2020,
    "sem": 1,
    "id": 115
  },
  {
    "courseName": "Chemical Exper I",
    "instructor": "Ramaiah D",
    "code": "CHEM F242",
    "year": 2020,
    "sem": 1,
    "id": 116
  },
  {
    "courseName": "Organic Chemistry II",
    "instructor": "Tanmay Chatterjee",
    "code": "CHEM F243",
    "year": 2020,
    "sem": 1,
    "id": 117
  },
  {
    "courseName": "Physical Chemistry III",
    "instructor": "Sumithra Kanakamma",
    "code": "CHEM F244",
    "year": 2020,
    "sem": 1,
    "id": 118
  },
  {
    "courseName": "Instru Methods Of Anal",
    "instructor": "Anupam Bhattacharya",
    "code": "CHEM F313",
    "year": 2020,
    "sem": 1,
    "id": 120
  },
  {
    "courseName": "Chemical Exper II",
    "instructor": "Balaji Gopalan",
    "code": "CHEM F341",
    "year": 2020,
    "sem": 1,
    "id": 124
  },
  {
    "courseName": "Inorganic Chemistry III",
    "instructor": "Krishnan R",
    "code": "CHEM F343",
    "year": 2020,
    "sem": 1,
    "id": 125
  },
  {
    "courseName": "Derivatives &  Risk Mgmt",
    "instructor": "Shreya Biswas",
    "code": "ECON F354",
    "year": 2020,
    "sem": 1,
    "id": 185
  },
  {
    "courseName": "Secur Anal & Portfol Mgt",
    "instructor": "Shreya Biswas",
    "code": "ECON F412",
    "year": 2020,
    "sem": 1,
    "id": 192
  },
  {
    "courseName": "Colloid & Surface Chem",
    "instructor": "Ramakrishnan Ganesan",
    "code": "CHEM F223",
    "year": 2020,
    "sem": 1,
    "id": 114
  },
  {
    "courseName": "Electrochem Funda & Appl",
    "instructor": "Durba Roy",
    "code": "CHEM F327",
    "year": 2020,
    "sem": 1,
    "id": 121
  },
  {
    "courseName": "Bio & Chemical Sensors",
    "instructor": "Subbalakshmi Jayanty",
    "code": "CHEM F414",
    "year": 2020,
    "sem": 1,
    "id": 130
  },
  {
    "courseName": "Analytical Chemistry",
    "instructor": "N Rajesh",
    "code": "CHEM F329",
    "year": 2020,
    "sem": 1,
    "id": 122
  },
  {
    "courseName": "Organic Chem & Drug Des",
    "instructor": "K V G Chandra Sekhar",
    "code": "CHEM F335",
    "year": 2020,
    "sem": 1,
    "id": 123
  },
  {
    "courseName": "Practice School II",
    "instructor": "Srinivas Prakash Regalla",
    "code": "BITS F412",
    "year": 2020,
    "sem": 1,
    "id": 40
  },
  {
    "courseName": "Thesis",
    "instructor": "Vasan Arunachalam",
    "code": "BITS F421T",
    "year": 2020,
    "sem": 1,
    "id": 44
  },
  {
    "courseName": "Cinematic Art",
    "instructor": "Spandan Bhattacharya",
    "code": "HSS F332",
    "year": 2020,
    "sem": 1,
    "id": 242
  },
  {
    "courseName": "Comparative Indian Lit",
    "instructor": "Prasuna M G",
    "code": "HSS F338",
    "year": 2020,
    "sem": 1,
    "id": 243
  },
  {
    "courseName": "Human Resource Develop",
    "instructor": "Swati Alok",
    "code": "HSS F328",
    "year": 2020,
    "sem": 1,
    "id": 241
  },
  {
    "courseName": "Practice School II",
    "instructor": "Srinivas Prakash Regalla",
    "code": "BITS F413",
    "year": 2020,
    "sem": 1,
    "id": 41
  },
  {
    "courseName": "Thesis",
    "instructor": "Vasan Arunachalam",
    "code": "BITS F422T",
    "year": 2020,
    "sem": 1,
    "id": 45
  },
  {
    "courseName": "Thesis",
    "instructor": "Vasan Arunachalam",
    "code": "BITS F423T",
    "year": 2020,
    "sem": 1,
    "id": 46
  },
  {
    "courseName": "Thesis",
    "instructor": "Vasan Arunachalam",
    "code": "BITS F424T",
    "year": 2020,
    "sem": 1,
    "id": 47
  },
  {
    "courseName": "Introducotry Philosophy",
    "instructor": "Jayesh A K",
    "code": "HSS F235",
    "year": 2020,
    "sem": 1,
    "id": 231
  },
  {
    "courseName": "Symbolic Logic",
    "instructor": "Pranesh Bhargava",
    "code": "HSS F236",
    "year": 2020,
    "sem": 1,
    "id": 232
  },
  {
    "courseName": "Environmental Studies",
    "instructor": "Sridev Mohapatra",
    "code": "BITS F225",
    "year": 2020,
    "sem": 1,
    "id": 33
  },
  {
    "courseName": "Intro To Globalization",
    "instructor": "Suchismita Satpathy",
    "code": "HSS F317",
    "year": 2020,
    "sem": 1,
    "id": 238
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Vivek Sharma",
    "code": "BIO F366",
    "year": 2020,
    "sem": 1,
    "id": 11
  },
  {
    "courseName": "Study Project",
    "instructor": "Vivek Sharma",
    "code": "BIO F266",
    "year": 2020,
    "sem": 1,
    "id": 8
  },
  {
    "courseName": "Study Project",
    "instructor": "Mohan S C",
    "code": "CE F266",
    "year": 2020,
    "sem": 1,
    "id": 68
  },
  {
    "courseName": "Study Project",
    "instructor": "Iyman Abrar",
    "code": "CHE F266",
    "year": 2020,
    "sem": 1,
    "id": 97
  },
  {
    "courseName": "Study Project",
    "instructor": "Amit Nag",
    "code": "CHEM F266",
    "year": 2020,
    "sem": 1,
    "id": 119
  },
  {
    "courseName": "Study Project",
    "instructor": "J Jabez Christopher",
    "code": "CS F266",
    "year": 2020,
    "sem": 1,
    "id": 137
  },
  {
    "courseName": "Study Project",
    "instructor": "Mini Thomas P",
    "code": "ECON F266",
    "year": 2020,
    "sem": 1,
    "id": 179
  },
  {
    "courseName": "Study Project",
    "instructor": "Subhradeep Pal",
    "code": "EEE F266",
    "year": 2020,
    "sem": 1,
    "id": 202
  },
  {
    "courseName": "Study Project",
    "instructor": "Subhradeep Pal",
    "code": "INSTR F266",
    "year": 2020,
    "sem": 1,
    "id": 251
  },
  {
    "courseName": "Study Project",
    "instructor": "Anil\tN",
    "code": "MATH F266",
    "year": 2020,
    "sem": 1,
    "id": 271
  },
  {
    "courseName": "Study Project",
    "instructor": "Morapakala Srinivas",
    "code": "ME F266",
    "year": 2020,
    "sem": 1,
    "id": 296
  },
  {
    "courseName": "Study Project",
    "instructor": "Morapakala Srinivas",
    "code": "MF F266",
    "year": 2020,
    "sem": 1,
    "id": 323
  },
  {
    "courseName": "Study Project",
    "instructor": "P Yogeeswari",
    "code": "PHA F266",
    "year": 2020,
    "sem": 1,
    "id": 340
  },
  {
    "courseName": "Study Project",
    "instructor": "Swastik Bhattacharya",
    "code": "PHY F266",
    "year": 2020,
    "sem": 1,
    "id": 364
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Anamala Jagadeesh",
    "code": "CE F366",
    "year": 2020,
    "sem": 1,
    "id": 72
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Afkham Mir",
    "code": "CHE F366",
    "year": 2020,
    "sem": 1,
    "id": 101
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Balaji Gopalan",
    "code": "CHEM F366",
    "year": 2020,
    "sem": 1,
    "id": 126
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "J Jabez Christopher",
    "code": "CS F366",
    "year": 2020,
    "sem": 1,
    "id": 142
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Anil\tN",
    "code": "MATH F366",
    "year": 2020,
    "sem": 1,
    "id": 278
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Dheeraj Agarwal",
    "code": "ME F366",
    "year": 2020,
    "sem": 1,
    "id": 303
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Dheeraj Agarwal",
    "code": "MF F366",
    "year": 2020,
    "sem": 1,
    "id": 326
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "P Yogeeswari",
    "code": "PHA F366",
    "year": 2020,
    "sem": 1,
    "id": 346
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Swastik Bhattacharya",
    "code": "PHY F366",
    "year": 2020,
    "sem": 1,
    "id": 371
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Mini Thomas P",
    "code": "ECON F366",
    "year": 2020,
    "sem": 1,
    "id": 187
  },
  {
    "courseName": "Design Project",
    "instructor": "Vivek Sharma",
    "code": "BIO F376",
    "year": 2020,
    "sem": 1,
    "id": 13
  },
  {
    "courseName": "Design Project",
    "instructor": "P N K Rao",
    "code": "CE F376",
    "year": 2020,
    "sem": 1,
    "id": 74
  },
  {
    "courseName": "Design Project",
    "instructor": "Afkham Mir",
    "code": "CHE F376",
    "year": 2020,
    "sem": 1,
    "id": 103
  },
  {
    "courseName": "Design Project",
    "instructor": "Sumithra Kanakamma",
    "code": "CHEM F376",
    "year": 2020,
    "sem": 1,
    "id": 128
  },
  {
    "courseName": "Design Project",
    "instructor": "J Jabez Christopher",
    "code": "CS F376",
    "year": 2020,
    "sem": 1,
    "id": 145
  },
  {
    "courseName": "Design Project",
    "instructor": "Mini Thomas P",
    "code": "ECON F376",
    "year": 2020,
    "sem": 1,
    "id": 189
  },
  {
    "courseName": "Design Project",
    "instructor": "Karumbaiah C N",
    "code": "EEE F376",
    "year": 2020,
    "sem": 1,
    "id": 208
  },
  {
    "courseName": "Design Project",
    "instructor": "Karumbaiah C N",
    "code": "INSTR F376",
    "year": 2020,
    "sem": 1,
    "id": 257
  },
  {
    "courseName": "Design Project",
    "instructor": "Jagan Mohan Jonnalagadda",
    "code": "MATH F376",
    "year": 2020,
    "sem": 1,
    "id": 280
  },
  {
    "courseName": "Design Project",
    "instructor": "Mrinal Ketan Jagirdar",
    "code": "ME F376",
    "year": 2020,
    "sem": 1,
    "id": 305
  },
  {
    "courseName": "Design Project",
    "instructor": "Mrinal Ketan Jagirdar",
    "code": "MF F376",
    "year": 2020,
    "sem": 1,
    "id": 328
  },
  {
    "courseName": "Design Project",
    "instructor": "P Yogeeswari",
    "code": "PHA F376",
    "year": 2020,
    "sem": 1,
    "id": 348
  },
  {
    "courseName": "Design Project",
    "instructor": "Swastik Bhattacharya",
    "code": "PHY F376",
    "year": 2020,
    "sem": 1,
    "id": 373
  },
  {
    "courseName": "Study Project",
    "instructor": "Subhradeep Pal",
    "code": "ECE F266",
    "year": 2020,
    "sem": 1,
    "id": 164
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "ECE F366",
    "year": 2020,
    "sem": 1,
    "id": 168
  },
  {
    "courseName": "Design Project",
    "instructor": "Karumbaiah C N",
    "code": "ECE F376",
    "year": 2020,
    "sem": 1,
    "id": 170
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "ECE F367",
    "year": 2020,
    "sem": 1,
    "id": 169
  },
  {
    "courseName": "Design Project",
    "instructor": "Karumbaiah C N",
    "code": "ECE F377",
    "year": 2020,
    "sem": 1,
    "id": 171
  },
  {
    "courseName": "Design Project",
    "instructor": "Pranesh Bhargava",
    "code": "HSS F376",
    "year": 2020,
    "sem": 1,
    "id": 247
  },
  {
    "courseName": "Special Project",
    "instructor": "Raghu Piska",
    "code": "CE F491",
    "year": 2020,
    "sem": 1,
    "id": 83
  },
  {
    "courseName": "Special Project",
    "instructor": "Chanchal Chakraborty",
    "code": "CHEM F491",
    "year": 2020,
    "sem": 1,
    "id": 131
  },
  {
    "courseName": "Special Project",
    "instructor": "J Jabez Christopher",
    "code": "CS F491",
    "year": 2020,
    "sem": 1,
    "id": 152
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "EEE F366",
    "year": 2020,
    "sem": 1,
    "id": 206
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "INSTR F366",
    "year": 2020,
    "sem": 1,
    "id": 255
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Vivek Sharma",
    "code": "BIO F367",
    "year": 2020,
    "sem": 1,
    "id": 12
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Anamala Jagadeesh",
    "code": "CE F367",
    "year": 2020,
    "sem": 1,
    "id": 73
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Afkham Mir",
    "code": "CHE F367",
    "year": 2020,
    "sem": 1,
    "id": 102
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Balaji Gopalan",
    "code": "CHEM F367",
    "year": 2020,
    "sem": 1,
    "id": 127
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "J Jabez Christopher",
    "code": "CS F367",
    "year": 2020,
    "sem": 1,
    "id": 143
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Mini Thomas P",
    "code": "ECON F367",
    "year": 2020,
    "sem": 1,
    "id": 188
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "EEE F367",
    "year": 2020,
    "sem": 1,
    "id": 207
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Parikshit Parshuram Sahatiya",
    "code": "INSTR F367",
    "year": 2020,
    "sem": 1,
    "id": 256
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Anil\tN",
    "code": "MATH F367",
    "year": 2020,
    "sem": 1,
    "id": 279
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Dheeraj Agarwal",
    "code": "ME F367",
    "year": 2020,
    "sem": 1,
    "id": 304
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Dheeraj Agarwal",
    "code": "MF F367",
    "year": 2020,
    "sem": 1,
    "id": 327
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "P Yogeeswari",
    "code": "PHA F367",
    "year": 2020,
    "sem": 1,
    "id": 347
  },
  {
    "courseName": "Laboratory Project",
    "instructor": "Swastik Bhattacharya",
    "code": "PHY F367",
    "year": 2020,
    "sem": 1,
    "id": 372
  },
  {
    "courseName": "Design Project",
    "instructor": "Vivek Sharma",
    "code": "BIO F377",
    "year": 2020,
    "sem": 1,
    "id": 14
  },
  {
    "courseName": "Design Project",
    "instructor": "P N K Rao",
    "code": "CE F377",
    "year": 2020,
    "sem": 1,
    "id": 75
  },
  {
    "courseName": "Design Project",
    "instructor": "Afkham Mir",
    "code": "CHE F377",
    "year": 2020,
    "sem": 1,
    "id": 104
  },
  {
    "courseName": "Design Project",
    "instructor": "Sumithra Kanakamma",
    "code": "CHEM F377",
    "year": 2020,
    "sem": 1,
    "id": 129
  },
  {
    "courseName": "Design Project",
    "instructor": "J Jabez Christopher",
    "code": "CS F377",
    "year": 2020,
    "sem": 1,
    "id": 146
  },
  {
    "courseName": "Design Project",
    "instructor": "Mini Thomas P",
    "code": "ECON F377",
    "year": 2020,
    "sem": 1,
    "id": 190
  },
  {
    "courseName": "Design Project",
    "instructor": "Karumbaiah C N",
    "code": "EEE F377",
    "year": 2020,
    "sem": 1,
    "id": 209
  },
  {
    "courseName": "Design Project",
    "instructor": "Karumbaiah C N",
    "code": "INSTR F377",
    "year": 2020,
    "sem": 1,
    "id": 258
  },
  {
    "courseName": "Design Project",
    "instructor": "Jagan Mohan Jonnalagadda",
    "code": "MATH F377",
    "year": 2020,
    "sem": 1,
    "id": 281
  },
  {
    "courseName": "Design Project",
    "instructor": "Mrinal Ketan Jagirdar",
    "code": "ME F377",
    "year": 2020,
    "sem": 1,
    "id": 306
  },
  {
    "courseName": "Design Project",
    "instructor": "Mrinal Ketan Jagirdar",
    "code": "MF F377",
    "year": 2020,
    "sem": 1,
    "id": 329
  },
  {
    "courseName": "Design Project",
    "instructor": "P Yogeeswari",
    "code": "PHA F377",
    "year": 2020,
    "sem": 1,
    "id": 349
  },
  {
    "courseName": "Design Project",
    "instructor": "Swastik Bhattacharya",
    "code": "PHY F377",
    "year": 2020,
    "sem": 1,
    "id": 374
  },
  {
    "courseName": "Intro To Dev Studies",
    "instructor": "Suchismita Satpathy",
    "code": "HSS F232",
    "year": 2020,
    "sem": 1,
    "id": 230
  },
  {
    "courseName": "Study Project",
    "instructor": "Pranesh Bhargava",
    "code": "HSS F266",
    "year": 2020,
    "sem": 1,
    "id": 237
  },
  {
    "courseName": "Solar Thermal Process En",
    "instructor": "Morapakala Srinivas",
    "code": "ME F433",
    "year": 2020,
    "sem": 1,
    "id": 308
  },
  {
    "courseName": "Negotiation Skills And Techniq",
    "instructor": "Raghunathan Rajasekaran",
    "code": "BITS F319",
    "year": 2020,
    "sem": 1,
    "id": 36
  },
  {
    "courseName": "Micro-Fluidics & Its App",
    "instructor": "Satish Kumar Dubey",
    "code": "BITS F417",
    "year": 2020,
    "sem": 1,
    "id": 43
  },
  {
    "courseName": "Micro-Fluidics & Its App",
    "instructor": "Satish Kumar Dubey",
    "code": "ME F423",
    "year": 2020,
    "sem": 1,
    "id": 307
  },
  {
    "courseName": "Robotics",
    "instructor": "Arshad Javed",
    "code": "BITS F441",
    "year": 2020,
    "sem": 1,
    "id": 48
  },
  {
    "courseName": "Remote Sens & Image Proc",
    "instructor": "K Rajitha",
    "code": "BITS F442",
    "year": 2020,
    "sem": 1,
    "id": 49
  },
  {
    "courseName": "Pattern Recognition",
    "instructor": "P K Thiruvikraman",
    "code": "BITS F446",
    "year": 2020,
    "sem": 1,
    "id": 50
  },
  {
    "courseName": "Post Colonial Literature",
    "instructor": "Maya Vinai",
    "code": "HSS F340",
    "year": 2020,
    "sem": 1,
    "id": 244
  },
  {
    "courseName": "Antenna Theory And Design",
    "instructor": "Harish Vijay Dixit",
    "code": "EEE F474",
    "year": 2020,
    "sem": 1,
    "id": 214
  },
  {
    "courseName": "General Mathematics II",
    "instructor": "Addepalli Ramu",
    "code": "BITS F114",
    "year": 2020,
    "sem": 1,
    "id": 31
  },
  {
    "courseName": "Process Engineering",
    "instructor": "Swati Biswas",
    "code": "BITS F219",
    "year": 2020,
    "sem": 1,
    "id": 32
  },
  {
    "courseName": "Combustion",
    "instructor": "Nandanavanam Jalaiah",
    "code": "ME F482",
    "year": 2020,
    "sem": 1,
    "id": 311
  },
  {
    "courseName": "Wind Energy",
    "instructor": "Sabareesh Geetha Rajasekharan",
    "code": "ME F483",
    "year": 2020,
    "sem": 1,
    "id": 312
  },
  {
    "courseName": "Automotive Technology",
    "instructor": "Supradeepan K",
    "code": "ME F484",
    "year": 2020,
    "sem": 1,
    "id": 313
  },
  {
    "courseName": "International Business",
    "instructor": "Archana Srivastava",
    "code": "ECON F434",
    "year": 2020,
    "sem": 1,
    "id": 194
  },
  {
    "courseName": "Marketing Research",
    "instructor": "Chinahussain Yaganti",
    "code": "ECON F435",
    "year": 2020,
    "sem": 1,
    "id": 195
  },
  {
    "courseName": "Cosmology",
    "instructor": "Bivudutta Mishra",
    "code": "MATH F456",
    "year": 2020,
    "sem": 1,
    "id": 285
  },
  {
    "courseName": "Sustainable Manufacturing",
    "instructor": "Kundan Kumar Singh",
    "code": "MF F485",
    "year": 2020,
    "sem": 1,
    "id": 332
  },
  {
    "courseName": "Control Systems Laboratory",
    "instructor": "Ankur Bhattacharjee",
    "code": "EEE F245",
    "year": 2020,
    "sem": 1,
    "id": 200
  },
  {
    "courseName": "Em Fields & Micro Engg Lab",
    "instructor": "Sourav Nandi",
    "code": "ECE F312",
    "year": 2020,
    "sem": 1,
    "id": 166
  },
  {
    "courseName": "Modeling Of Field-Effect Nano",
    "instructor": "Sayan Kanungo",
    "code": "EEE F477",
    "year": 2020,
    "sem": 1,
    "id": 215
  },
  {
    "courseName": "Elec & Electronic Circuits Lab",
    "instructor": "Ershad Ahmed S",
    "code": "EEE F246",
    "year": 2020,
    "sem": 1,
    "id": 201
  },
  {
    "courseName": "Power Systems Lab",
    "instructor": "Alivelu Manga Parimi",
    "code": "EEE F478",
    "year": 2020,
    "sem": 1,
    "id": 216
  },
  {
    "courseName": "Contemporary Indian English Fi",
    "instructor": "Maya Vinai",
    "code": "HSS F237",
    "year": 2020,
    "sem": 1,
    "id": 233
  },
  {
    "courseName": "Financial Management",
    "instructor": "Niranjan Swain",
    "code": "ECON F315",
    "year": 2020,
    "sem": 1,
    "id": 180
  },
  {
    "courseName": "Materials Processing",
    "instructor": "A Ramesh Babu",
    "code": "MST F332",
    "year": 2020,
    "sem": 1,
    "id": 334
  },
  {
    "courseName": "Water Sanitation And Solid Wa",
    "instructor": "Sankar Ganesh P",
    "code": "BIO F216",
    "year": 2020,
    "sem": 1,
    "id": 4
  },
  {
    "courseName": "Financial Risk Analytics & M",
    "instructor": "Thota Nagaraju",
    "code": "FIN F414",
    "year": 2020,
    "sem": 1,
    "id": 224
  },
  {
    "courseName": "Social And Political Ecology",
    "instructor": "Lavanya Suresh",
    "code": "HSS F322",
    "year": 2020,
    "sem": 1,
    "id": 239
  },
  {
    "courseName": "Research Practice",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS G540",
    "year": 2020,
    "sem": 1,
    "id": 57
  },
  {
    "courseName": "Adv Computer Architectur",
    "instructor": "G Geethakumari",
    "code": "CS G524",
    "year": 2020,
    "sem": 1,
    "id": 156
  },
  {
    "courseName": "Adv & Applied Microbio",
    "instructor": "Jayati Ray Dutta",
    "code": "BIO G523",
    "year": 2020,
    "sem": 1,
    "id": 17
  },
  {
    "courseName": "Software For Embedde Sys",
    "instructor": "Srinivas M B",
    "code": "CS G523",
    "year": 2020,
    "sem": 1,
    "id": 155
  },
  {
    "courseName": "Heating & Cool Of Build",
    "instructor": "S S Deshmukh",
    "code": "ME G513",
    "year": 2020,
    "sem": 1,
    "id": 314
  },
  {
    "courseName": "Advanced Composites",
    "instructor": "Pavan Kumar Penumakala",
    "code": "MST G522",
    "year": 2020,
    "sem": 1,
    "id": 335
  },
  {
    "courseName": "Into To Nano Sci & Tech",
    "instructor": "Debirupa Mitra",
    "code": "CHE G528",
    "year": 2020,
    "sem": 1,
    "id": 108
  },
  {
    "courseName": "Thermal Equipment Design",
    "instructor": "Santanu Prasad Datta",
    "code": "ME G536",
    "year": 2020,
    "sem": 1,
    "id": 317
  },
  {
    "courseName": "Research Methodology I",
    "instructor": "Aravinda N Raghavan",
    "code": "BITS E661",
    "year": 2020,
    "sem": 1,
    "id": 26
  },
  {
    "courseName": "Advanced Data Mining",
    "instructor": "J Jabez Christopher",
    "code": "CS G520",
    "year": 2020,
    "sem": 1,
    "id": 154
  },
  {
    "courseName": "Cloud Computing",
    "instructor": "D V N Siva Kumar",
    "code": "CS G527",
    "year": 2020,
    "sem": 1,
    "id": 157
  },
  {
    "courseName": "Tribology",
    "instructor": "Prabakaran Saravanan",
    "code": "DE G513",
    "year": 2020,
    "sem": 1,
    "id": 159
  },
  {
    "courseName": "Convect Heat & Mass Tran",
    "instructor": "Ram Chandra Murthy Kalluri",
    "code": "ME G534",
    "year": 2020,
    "sem": 1,
    "id": 316
  },
  {
    "courseName": "Reading Course I",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS E593",
    "year": 2020,
    "sem": 1,
    "id": 25
  },
  {
    "courseName": "Thin Film Technology",
    "instructor": "V S N Murthy",
    "code": "PHY F379",
    "year": 2020,
    "sem": 1,
    "id": 375
  },
  {
    "courseName": "Adv Transport Phenomena",
    "instructor": "Balaji Krishnamurthy",
    "code": "CHE G552",
    "year": 2020,
    "sem": 1,
    "id": 109
  },
  {
    "courseName": "Computational Fluid Dynamics",
    "instructor": "Vikranth Kumar Surasani",
    "code": "CHE G554",
    "year": 2020,
    "sem": 1,
    "id": 110
  },
  {
    "courseName": "Dissertation",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS G562T",
    "year": 2020,
    "sem": 1,
    "id": 58
  },
  {
    "courseName": "Dissertation",
    "instructor": "Venkata Vamsi Krishna Venuganti",
    "code": "BITS G563T",
    "year": 2020,
    "sem": 1,
    "id": 59
  },
  {
    "courseName": "Research Methodology I",
    "instructor": "Vikranth Kumar Surasani",
    "code": "BITS G661",
    "year": 2020,
    "sem": 1,
    "id": 63
  },
  {
    "courseName": "Behavioral Economics",
    "instructor": "Dushyant Kumar",
    "code": "ECON F345",
    "year": 2020,
    "sem": 1,
    "id": 184
  },
  {
    "courseName": "Introduction To Algebraic Topo",
    "instructor": "Sharan Gopal",
    "code": "MATH F423",
    "year": 2020,
    "sem": 1,
    "id": 283
  },
  {
    "courseName": "Advanced Concrete Technology",
    "instructor": "Arkamitra Kar",
    "code": "CE G562",
    "year": 2020,
    "sem": 1,
    "id": 86
  },
  {
    "courseName": "Colloids And Interface Enginee",
    "instructor": "B Nandini",
    "code": "CHE F498",
    "year": 2020,
    "sem": 1,
    "id": 106
  },
  {
    "courseName": "Disaster And Development",
    "instructor": "Biswanath Dash",
    "code": "HSS F363",
    "year": 2020,
    "sem": 1,
    "id": 245
  },
  {
    "courseName": "Science Of Sustainable Happine",
    "instructor": "Aruna Lolla",
    "code": "HSS F365",
    "year": 2020,
    "sem": 1,
    "id": 246
  },
  {
    "courseName": "Geometrical Methods In",
    "instructor": "Sashideep Gutti",
    "code": "PHY F431",
    "year": 2020,
    "sem": 1,
    "id": 378
  },
  {
    "courseName": "Game Theory And Its Applicatio",
    "instructor": "Durgesh Chandra Pathak",
    "code": "BITS F314",
    "year": 2020,
    "sem": 1,
    "id": 35
  },
  {
    "courseName": "Engineering Hydrology",
    "instructor": "Srinivasa Raju K",
    "code": "CE F321",
    "year": 2020,
    "sem": 1,
    "id": 69
  },
  {
    "courseName": "Internet Of Things",
    "instructor": "Sandeep Kumar",
    "code": "EEE F411",
    "year": 2020,
    "sem": 1,
    "id": 210
  },
  {
    "courseName": "Pharmaceutical Bio Statistics",
    "instructor": "Punna Rao Ravi",
    "code": "PHA G546",
    "year": 2020,
    "sem": 1,
    "id": 355
  },
  {
    "courseName": "Crime And New Media",
    "instructor": "Anhiti Patnaik",
    "code": "HSS F244",
    "year": 2020,
    "sem": 1,
    "id": 234
  },
  {
    "courseName": "Gender Science And Technology",
    "instructor": "Aswathy Raveendran",
    "code": "HSS F245",
    "year": 2020,
    "sem": 1,
    "id": 235
  },
  {
    "courseName": "Artificial Intelligence For Ro",
    "instructor": "Abhishek Sarkar",
    "code": "BITS F327",
    "year": 2020,
    "sem": 1,
    "id": 37
  },
  {
    "courseName": "Public Transportation",
    "instructor": "Prasanta Kumar Sahu",
    "code": "CE G566",
    "year": 2020,
    "sem": 1,
    "id": 87
  },
  {
    "courseName": "Highway Construction Technolog",
    "instructor": "Sridhar R",
    "code": "CE G570",
    "year": 2020,
    "sem": 1,
    "id": 88
  },
  {
    "courseName": "Freight Transportation",
    "instructor": "Prasanta Kumar Sahu",
    "code": "CE G575",
    "year": 2020,
    "sem": 1,
    "id": 89
  },
  {
    "courseName": "Advanced Mechanics Of Solids",
    "instructor": "Brajesh Kumar Panigrahi",
    "code": "ME F218",
    "year": 2020,
    "sem": 1,
    "id": 288
  },
  {
    "courseName": "Manufacturing Processes",
    "instructor": "N Suresh Kumar Reddy",
    "code": "ME F219",
    "year": 2020,
    "sem": 1,
    "id": 289
  },
  {
    "courseName": "Mechanisms And Machines",
    "instructor": "Y V Daseswara Rao",
    "code": "ME F221",
    "year": 2020,
    "sem": 1,
    "id": 291
  },
  {
    "courseName": "Introduction To Disability Stu",
    "instructor": "Shilpaa Anand",
    "code": "HSS F248",
    "year": 2020,
    "sem": 1,
    "id": 236
  },
  {
    "courseName": "Heat Transfer",
    "instructor": "Satish Kumar Dubey",
    "code": "ME F220",
    "year": 2020,
    "sem": 1,
    "id": 290
  }
]


export default JSON.stringify(courseData)