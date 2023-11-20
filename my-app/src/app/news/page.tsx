"use client";
import "../globals.css";
import React, { FC, useState, Fragment } from "react";
import Navbar from "../../components/UI/Navbar";
import Image from "next/image";

const AboutPage: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h1 className="text-4xl font-bold text-slate-800">最新消息</h1>
        <section id="featured-news">
          <article className="my-10 lg:py-4 flex flex-col lg:flex-row items-start justify-around bg-slate-200 rounded-md">
            <Image
              src={"/assets/news/20231114.jpg"}
              width={500}
              height={281}
              alt="焦點新聞圖片"
            />
            <div className="max-h-[281px] overflow-y-scroll max-w-xl p-4">
              <h2 className="text-2xl my-5 font-medium">
                風中飄盪的寒意降臨！討伐風漂龍吧！
              </h2>
              <p className="text-lg font-medium">
                各位獵人，
                <br />
                <br />
                沼澤區域氣溫降低，各地開始目擊到前來捕食芳翼龍的風漂龍，
                <br />
                這是風漂龍出現機率增加的徵兆。
                <br />
                <br />
                風漂龍身上纏繞著寒氣，會發動強力攻擊。
                <br />
                弱點是火屬性與毒屬性。請準備好裝備後再前往調查。
                <br />
                <br />
                時間（當地時間）：
                <br />
                <br />
                11月17日（五）17:00～20:00
                <br />
                11月18日（六）13:00～16:00
                <br />
                11月19日（日）13:00～16:00
                <br />
                <br />
                活動詳細內容：
                <br />
                <br />
                ・風漂龍在沼澤區域的出現機率會增加。
                <br />
                ・活動期間內，所有區域魔物的重新出現時間會縮短。
                <br />
                <br />
                注意事項
                <br />
                <br />
                ※活動期間內，任何達到HR 11以上的人，風漂龍的出現機率都會提升。
                <br />
                ※內容有可能會變更。
                <br />
                <br />
                追隨官方的社群媒體，別錯過任何最新資訊。
              </p>
            </div>
          </article>

          <article className="my-10 lg:py-4 flex flex-col lg:flex-row items-start justify-around bg-slate-200 rounded-md">
            <Image
              src={"/assets/news/20231107.jpg"}
              width={500}
              height={281}
              alt="焦點新聞圖片"
            />
            <div className="max-h-[281px] overflow-y-scroll max-w-xl  p-4">
              <h2 className="text-2xl my-5 font-medium">
                「來自庫萊莉的特殊任務」發布！
              </h2>
              <p className="text-lg font-medium">
                各位獵人們
                <br />
                收到來自庫萊莉本週末的限定調查委託了吧。
                <br />
                <br />
                庫萊莉為了找出與這個世界相連的異常，而持續探詢其真相。
                <br />
                為了幫忙庫萊莉，各位能幫忙重新調查出現在現實世界的魔物以及採集點嗎？
                <br />
                <br />
                庫萊莉準備了黏濁黑蟻、上龍骨、以及ZENY等素材作為協助調查的謝禮。
                <br />
                <br />
                週末，調整好裝備開始調查吧。
                <br />
                <br />
                時間（當地時間）：
                <br />
                <br />
                11月10日（五）17：00 ～ 11月12日（日）16：00
                <br />
                <br />
                活動詳細內容：
                <br />
                <br />
                ．發布獲得黏濁黑蟻及上龍骨等素材的期間限定特殊任務。完成於採集點的採集和討伐魔物等條件獲取報酬吧。
                <br />
                <br />
                注意事項
                <br />
                <br />
                ※活動任務將自動發布遊戲內的特殊任務標籤給HR11以上的玩家。
                <br />
                ※任務中的討伐對象大凶顎龍，出現條件為通過主線劇情第2章節。
                <br />
                ※也可透過多人遊玩討伐魔物完成任務。
                <br />
                ※任務有效時間為11/10（五）17：00 ～
                11/12（日）16：00。請在時間內完成任務獲取報酬吧。
                <br />
                ※任務內容有可能會變更。
                <br />
                <br />
                追隨官方的社群媒體，別錯過任何最新資訊。
              </p>
            </div>
          </article>

          <article className="my-10 lg:py-4 flex flex-col lg:flex-row items-start justify-around bg-slate-200 rounded-md">
            <Image
              src={"/assets/news/20231101.jpg"}
              width={500}
              height={281}
              alt="焦點新聞圖片"
            />
            <div className="max-h-[281px] overflow-y-scroll max-w-xl  p-4">
              <h2 className="text-2xl my-5 font-medium">
                《魔物獵人 Now》：11月的活動公告！
              </h2>
              <p className="text-lg font-medium">
                各位獵人們，
                <br />
                <br />
                我們要在此公布11月的活動行程。11月也有非常豐富的各種活動！
                <br />
                <br />
                泥魚龍週末活動
                <br />
                <br />
                時間（當地時間）
                <br />
                <br />
                11月3日（五）17:00～20:00
                <br />
                11月4日（六）13:00～16:00
                <br />
                11月5日（日）13:00～16:00
                <br />
                任何達到HR 11以上的人進入沼澤區域時，泥魚龍的出現機率會增加。
                <br />
                活動期間內，所有區域的重新出現時間會縮短。
                <br />
                <br />
                來自庫萊莉的特殊任務
                <br />
                <br />
                時間（當地時間）
                <br />
                <br />
                11月10日（五）17:00～11月12日（日）16:00
                <br />
                達到HR
                11以上的話，就會出現期間限定的活動任務。完成任務後，能獲得強化裝備所需的黏著黑蟻、上龍骨之類的採集素材以及ZENY。
                <br />
                <br />
                風漂龍週末活動
                <br />
                <br />
                時間（當地時間）
                <br />
                <br />
                11月17日（五）17:00～20:00
                <br />
                11月18日（六）13:00～16:00
                <br />
                11月19日（日）13:00～16:00
                <br />
                任何達到HR 11以上的人進入沼澤區域時，風漂龍的出現機率會增加。
                <br />
                活動期間內，所有區域的重新出現時間會縮短。
                <br />
                <br />
                沙漠咆哮 角龍
                <br />
                <br />
                本週黑角龍重新登場。週末除了發布可獲得特別獵人勳章的期間限定特殊任務以外，在一定期間內，角龍、黑角龍會比平時更常出現。
                <br />
                <br />
                時間（當地時間）
                <br />
                <br />
                11月20日（一）9:00～11月26日（日）16:00
                <br />
                通關第11章並解鎖狩獵角龍後，黑角龍會以低機率出現在沙漠區域。
                <br />
                <br />
                另外，在以下期間內，任何達到HR
                11以上的人進入沙漠區域時，除了角龍與黑角龍會比平時更常出現以外，所有區域的魔物重新出現時間也會縮短。
                <br />
                <br />
                11月24日（五）17:00～20:00
                <br />
                11月25日（六）13:00～16:00
                <br />
                11月26日（日）13:00～16:00
                <br />
                ※黑角龍在11月26日的活動結束後，會暫時消隱蹤跡。
                <br />
                <br />
                ※內容有可能會變更。
                <br />
                <br />
                追隨官方的社群媒體，別錯過任何最新資訊。
              </p>
            </div>
          </article>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutPage;
