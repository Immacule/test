export default function dHome(){
    return(
 <> 
      < body className="bg-ghostwhite-400">
    <div className="bg-white w-full m-2 p-3"></div>
    
    <ul className="flex">
        <li className="w-3/5 text-green-300 p-2 font-bold text-3xl inline-block"><a href="">Salarium</a></li>
        <div className="w-2/5 inline-block justify-end">
        <li className="inline-block p-3"><a href="">Home</a></li>
        <li className="inline-block p-3"><a href="">How it works</a></li>
        <li className="inline-block p-3"><a href="">FaQs</a></li>
        <li className="inline-block p-3"><a href="">iCons</a></li>
        </div>
    </ul>
    <div className="body">
    <h2 className="text-center text-green-500 text-6xl p-3"><b>On-Demand Salary</b></h2>
    <h2 className="text-center text-6xl p-3"><b>for ever Employee</b></h2>
    <p className="text-center text-sm">Get your salary instantly,request weekly.</p>
    <p className="text-center  text-sm">bi-weekly or anytime you please!</p>
    </div>
    <div className="flex justify-center">
        <span className="bg-green-500  text-white rounded-full p-3 m-4 text-sm w-60 text-center"><b><a href="">Get In Touch</a></b></span>
    </div>
</body>
       </>
    );
}