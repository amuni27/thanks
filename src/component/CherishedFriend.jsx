import React from 'react';
import Image from "./Image.jsx";
import yo from "../assets/yo.jpeg";
import sol from "../assets/sol.jpeg";
import aman from "../assets/aman.jpg";
import kal from "../assets/kal.jpg";
import menge from "../assets/menge.jpeg";

function CherishedFriend() {
    return (
        <div className="w-full flex justify-center mt-20 ">
            <div className="w-3/4 h-[400px] border-2  flex bg-gray-50 rounded-3xl ">
                <div className="w-1/4 h-[420px] shadow-2xl rounded-3xl overflow overflow-clip">
                    <Image style="w-auto h-[420px] scale-400 rounded-3xl" link={yo} name="Yo"/>
                </div>
                <div className="w-3/4 h-full flex-row">
                    <div className="w-full h-3/4 ">
                        <p className="text-2xl text-justify pl-10 pr-10 pt-10 text-gray-500">ዮ ዛሬ ላይ ቆሜ ስለትላንቱ ሳስብ አንተን የመሰለ ወንድም ባይኖረን ዛሬ ላይ ላለሁበት
                            ጠንካራ ማንነት እችላለው የሚል ጥንካሬን፣ ሰርቶ ማሳየትን፣ ነገሮች ሁሉ መሆን እንደሚችሉ
                            ማመንን፣ ለሰው መኖር፣ መርዳትን፣ ጉብዝናን፣ አብሮነትን ጓደኝነትን አልፎ ወንድምነትን
                            ዘርዝሬ እማልጨርሳቸውን ነገሮች እንዲ በቀላሉ ለማግኘት ከባድ ይሆኑ ነበር፡፡ አንተ
                            ከሁላችንም በላይ ስለኛ መቻል እርግጠኛ ነህ ያንተ እርግጠኛነት ደግሞ ትልቅ የመንፈስ
                            ጥንካሬን ሰጦናል፡፡ ለኛ ትልቅ አራያችን ነህ፡፡ ዮ ኑርልን ለሁሉም ትረፍ አምላክ ጤናን
                            አብዝቶ ይስጥልን በጣም እናመሰግንሀለን ምርጡ ወንድማችን </p>
                    </div>
                    <div className="w-full h-1/4  flex items-center justify-center">
                       <div className="w-3/4"><span className="pl-10 text-gray-500">Contributor</span></div>
                        <div className="w-1/4 flex justify-center items-center pr-10">
                             <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-full" link={sol} name="Yo"/>
                             <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-full" link={kal} name="Yo"/>
                             <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-full" link={aman} name="Yo"/>
                             <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-2xl" link={menge} name="Yo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CherishedFriend;