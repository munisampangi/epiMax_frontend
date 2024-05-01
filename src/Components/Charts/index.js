import {Line,LineChart,XAxis,YAxis,Pie,PieChart,CartesianGrid,Legend,Bar,Tooltip,ResponsiveContainer,BarChart} from 'recharts'

import './index.css'
const color=[
    {
        primaryColor:"#5D93E1",
        secondaryColor:"#ECF3FC"
    },
    {
        primaryColor:"#F9D288",
        secondaryColor:"#FEFAF1"
    },
    {
        primaryColor:"#5DC250",
        secondaryColor:"#F2FAF1"
    },
    {
        primaryColor:"#F48687",
        secondaryColor:"#FdF1F1"
    },
    {
        primaryColor:"#B964F7",
        secondaryColor:"#F3F0FD"
    }
]
let x=Math.floor(Math.random()*5)
let stroke=color[x].primaryColor
const data = [
        { Technology: "pyhton",Users: 1000 },
        { Technology: "HTML", Users: 1500 },
        { Technology: "C#", Users: 900 },
        { Technology: "C++", Users: 600 },
        { Technology: "SQL", Users: 1100 },
        { Technology : "Java", Users: 800 },
        { Technology: "Ruby", Users: 400 },
        { Technology: "PHP", Users: 700 },
        { Technology: "Swift", Users: 300 },
        { Technology : "Js", Users: 1200 },
        { Technology : "React", Users: 1500 }
  ]

  const Charts=()=>{
    return(
        <div className="charts-section">
        <div>
       
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Technology" />
          <YAxis />
          <Tooltip />
          
          <Line type="monotone" dataKey="Users" stroke= {stroke} activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      
    

        </div>

        <div>
        <BarChart
          width={500}
          height={300}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey= "Technology" />
          <Bar dataKey="Users" fill={stroke} stroke={stroke} />
         
        </BarChart>
        </div>
      

      <>
        <PieChart width={600} height={200}>
            <Legend/>
            
          <Pie data={data} dataKey="Users" cx="50%" cy="50%" outerRadius={60} fill={stroke} />
          {/* <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label /> */}
        </PieChart>
      </>
    

        </div>
    )
  }
  export default Charts