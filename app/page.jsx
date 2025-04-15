import { Card , CardContent} from "@/components/ui/card";
import HeroSection from "@/components/ui/heroSection";
import { featuresData, howItWorksData }  from "@/data/landing";
export default function Home() {
  return(
     <div>
        <HeroSection/>
        <div className="bg-black">
        <section className="py-20 ">
          <div className="text-white mx-auto text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-11 ">
            <h2 >Everything you need to manage your finances</h2>
          </div>
          <div className="container mx-auto px-5 text-black  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuresData.map((featuresData ,index) =>(
                <div key={index}>
                  <Card className="px-3 py-10 hover:shadow-2xl shadow-cyan-500 duration-200 active:shadow-2xl active:shadow-green-500">
                    <CardContent className="pt-3"><div>{featuresData.icon}</div></CardContent>
                    <CardContent className="text-xl font-semibold "><div>{featuresData.title}</div></CardContent>
                    <CardContent className="text-neutral-500 -mt-4"><div>{featuresData.description}</div></CardContent>
                    </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="text-black text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-11">
            <h2 >How its Works</h2>
          </div>
          <div className="container mx-auto px-5 text-black text-center  ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
              {howItWorksData.map((step ,index) =>(
                <div key={index}>
                  <Card className=" py-10 hover:shadow-2xl shadow-cyan-500 duration-200 bg-black text-white text-center active:shadow-2xl active:shadow-red-600 hover:ease-initial">
                    <CardContent className="pt-3 text-center flex justify-center "><div>{step.icon}</div></CardContent>
                    <CardContent className="text-xl font-semibold "><div>{step.title}</div></CardContent>
                    <CardContent className="text-neutral-500 -mt-4"><div>{step.description}</div></CardContent>
                    </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
        
    </div>
    
  )
  };

