const [step, setSteps] = useState(1);
{
  /* steps */
}
<div className="flex gap-x-4">
  {/* first step */}
  <div className={`${step === 1 ? "bg-blue-400" : "bg-white"}`}>First step</div>
  {/* second step */}
  <div className={`${step === 2 ? "bg-blue-400" : "bg-white"}`}>
    Second Step
  </div>
</div>;

{
  /* steps button */
}
<div>
  <button onClick={() => setSteps((prev) => prev + 1)}>forward</button>
  <button onClick={() => setSteps((prev) => prev - 1)}>backward</button>
</div>;
//66138d42669ec81c11ffcb81

//66530d530478429fd7034135
