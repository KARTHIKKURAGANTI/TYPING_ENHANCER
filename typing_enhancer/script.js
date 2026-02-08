let quoteE1=document.getElementById("quote");
let iptxtE1=document.getElementById("input box");
let timeE1=document.getElementById("time");
let wpmE1=document.getElementById("wpm");
let accE1=document.getElementById("accuracy");
let mistakesE1=document.getElementById("mistakes");
let resrtE1=document.getElementById("restartbtn");

const quotebox=[
    "Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. Thus the energy released cannot do much damage. However, several subatomic particles called neutrons are also emitted during this process. Each neutron will hit a radioactive element releasing more neutrons in the process.",
    "Since March 8, 1990, Women’s Day has been observed by SAARC (South Asian Association for Regional Cooperation) comprising seven countries namely India, Pakistan, Nepal, Bhutan, Bangladesh, Sri Lanka and Maldives. The day is celebrated to highlight the problems of the girl child in these countries. It is very sad that girl children are subjected to extreme neglect and disrespect, especially in underdeveloped countries.",
    "Everyone knows that paper is made from trees. But when one looks at trees, one cannot imagine that something so soft and fragile as the paper is made is so hard and strong. Plant materials such as wood are made of fibres known as cellulose. It is the primary ingredient in paper making. Raw wood is first converted into pulp consisting of a mixture of Cellulose, lignin, water and some chemicals. The pulp can be made mechanically through grinders or through chemical processes.",
    "Gardening is my favourite hobby. I own a small plot of land next to our house. I cultivate gardening there. Every day, I spend half an hour gardening. After returning from my morning walk, I go to my garden with a spade and a bucket of water. I prepare the soil, prune the plants, and water them. I also use insecticides and fertilisers. My heart leaps with joy when I see the plants swaying in the wind. ",
    "Home is the place where we return to rest after a day’s work, and where parents and children meet together and have a carefree and joyful time. Our family consists of three members—father, mother, and brother. We live in a rural area. It is free from the hustle and bustle of city life. It is especially famous for its scenic beauty. I am the most important member of the family. Everyone trusts my judgement and agrees to follow my suggestions."
]

function loader(){
        
        let index=Math.floor(Math.random()*quotebox.length)
        quoteE1.innerHTML=quotebox[index];

        let i=10
        function counter()
            {
                i-=1;
                timeE1.innerHTML=i;
                if(i===0)
                    {
                    clearInterval(timer);
                    quoteE1.innerHTML="";
                    iptxtE1.disabled = true;
                    metrics();
                    }
            }
        iptxtE1.disabled = false;
        iptxtE1.value="";
        let timer=setInterval(counter,1000);


        function metrics()
        {
            let ans=iptxtE1.value;
            let wpm=ans.length;
            let mistakes=countMistakes();
            let accuracy=`${acc()}%`;
            
            
            
            function acc()
            {
                return (((wpm-mistakes)/wpm)*100).toFixed(2);
            }
        
            function countMistakes()
            {
                let computerStr=quotebox[index].slice(0,wpm);
                let count=0;
                for(let i=0;i<wpm;i++)
                    {
                    if(computerStr[i]!=ans[i])
                        {
                        count+=1;
                        }
                    }
                return count;
            }
        
            wpmE1.innerHTML=wpm;
            accE1.innerHTML=accuracy;
            mistakesE1.innerHTML=mistakes;
        }

}
