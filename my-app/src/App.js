import Header from "./Components/Header";
import Form from "./Components/Form";
import React from "react";
import Card from "./Components/Card";

function App() {
  const [planData,setPlanData] = React.useState(JSON.parse(localStorage.getItem("planData")) || {
    monday : [],
    tuesday : [],
    wednesday : [],
    thursday : [],
    friday : [],
    saturday : [],
    sunday : []

 })
//  console.log(planData)

  React.useEffect(() =>{
    // console.log(planData)
    localStorage.setItem("planData",JSON.stringify(planData))
  },[JSON.stringify(planData)])
  return (
    <>
      <Header />
      <Form setPlanData={setPlanData}/>
      <Card data={planData} setData = {setPlanData} />
    </>
  );
}

export default App;
