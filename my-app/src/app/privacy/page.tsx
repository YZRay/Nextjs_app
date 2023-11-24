"use client";
import "../globals.css";
import React, { FC, useState, Fragment } from "react";

const AboutPage: FC = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="w-lg-75 mx-lg-auto">
          <div className="card card-lg card-shadow">
            <div className="card-header bg-slate-900">
              <h1 className="card-title h2 text-white">隱私權政策</h1>
              <p className="card-text text-white">
                最後更新 : Jan 01, 2023 (view archived versions)
              </p>
            </div>
            <div className="card-body bg-slate-600">
              <div className="mb-7 text-white">
                <h2>隱私政策介紹</h2>
                <p>
                  魔物地圖 MHNow.cc
                  <span>
                    重視每位使用者的隱私權，將依本政策及個人資料保護法規定，蒐集、利用、處理與保護您的個人資料，希望您在使用本平台之服務前，能夠詳細閱讀
                    魔物地圖 MHNow.cc
                  </span>
                  <span> </span>
                  <span>的個人資料蒐集告知及隱私權保護政策。</span>
                </p>
                <ul>
                  <li>
                    本政策所涵蓋之範圍包括所有 魔物地圖 MHNow.cc 透過本網站（{" "}
                    <a href="https://mhnow.cc" target="_blank">
                      https://mhnow.cc
                    </a>{" "}
                    ）所向您蒐集個人資訊及其後續之利用、處理行為，包含：使用者名稱、年齡、性別、職業、通訊地址、Email
                    與連絡電話，或其他您註冊時或其後所同意 魔物地圖 MHNow.cc
                    蒐集之個人資訊。
                  </li>
                  <li>
                    本政策之效力範圍僅及於本網站，若您點選第三人網站之連結或廣告，拜訪各該網站或網頁時，應依各該網站或網頁之經營者所定之隱私權政策規定處理，與
                    魔物地圖 MHNow.cc 無涉。
                  </li>
                </ul>
                <h3>我們蒐集的資料</h3>
                <p>
                  當您註冊或者是運用我們的服務時，我們會收集一些有關您的個人資料。我們也有可能會記錄您在我們網站上做的活動。例如說，記錄您是從哪一個網站轉接到我們的網站來的、您看過的頁面、您修改給過的資料、或是您收到的報價記錄。
                </p>
                <h3>蒐集的個人資料類別</h3>
                <p>
                  因為安全考量，我們沒有辦法直接提供您的資料給您。如果您想要查看您的資料，您可以用您的帳號及密碼登入到您的帳戶裡面查看個人資料檔案。我們強烈建議您用一個較難破解的密碼，以確保您的帳號不會被他人盜用。若您委託他人代為登入者，您將負完全的責任。
                </p>
                <p>依個人資料保護法第 8 條規定之告知事項如下：</p>
                <p>本公司之蒐集的個人資料包括：</p>
                <ul>
                  <li>
                    C001
                    辨識個人者：如姓名、地址、室內電話號碼、行動電話、即時通帳號、網路平臺申請之帳號、通訊及戶籍地址、電子郵遞地址、提供網路身分認證或申辦查詢服務之紀錄及其他任何可辨識資料本人者等；
                  </li>
                  <li>
                    C011
                    個人描述：如年齡、性別、出生年月日、出生地、國籍、聲音等；
                  </li>
                </ul>
                <h3>我們收集您的資料以便我們：</h3>
                <ul>
                  <li>讓第三方網站、公司、或服務回應您的產品申請；</li>
                  <li>
                    提供給您更好的服務、執行分析市場趨勢、還有了解客戶需求；
                  </li>
                </ul>
                <p>
                  依個人資料保護法第 8 條規定之告知事項如下：
                  <br />
                  <span>本公司之蒐集目的在於：</span>
                </p>
                <ul>
                  <li>
                    <span>
                      <span>090 消費者、客戶管理與服務；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>098 商業與技術資訊；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>135 資（通）訊服務；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>136 資（通）訊與資料庫管理；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>137 資通安全與管理；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>148 網路購物及其他電子商務服務；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>150 輔助性與後勤支援管理；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>152 廣告或商務行為管理；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>157 調查、統計與研究分析；</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>
                        176
                        其他自然人基於正當性目的所進行個人資料之蒐集處理及利用。蒐集方式將透過加入會員、線上訂購、線上留言、來信客服信箱方式進行個人資料之蒐集。
                      </span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <span>182 其他諮詢與顧問服務；</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-7 text-white">
                <h3>
                  <span>
                    <strong>資訊分享與揭露</strong>
                  </span>
                </h3>
                <p>
                  我們絕對不會把您的個人資料分享給跟我們沒有直接合作關係的公司或是機構。
                  魔物地圖 MHNow.cc
                  絕對不會在非必要的情況之下（例如說當有牽涉到生命危險、觸犯法律、等等）把您的資料提供給跟我們沒有直接合作關係的他人或是機構。我們也有可能會利用您的資料以便我們或者是我們的合作夥伴寄送電子報給您（您可以隨時取消這些電子報）。
                </p>
                <p>
                  您在使用我們的服務同時您也同意我們可以揭露有關您的資料給：
                </p>
                <ul>
                  <li>
                    提供產品在我們網站上的第三方以便您申請報價之後他們可以回應報價給您。您的資料送發到第三方之後，他們就會按照他們自己的操作方式管理您的資料。所以後續如果您需要更多的有關他們操作資料的方法，您必須到他們的網站閱讀他們的隱私政策或是直接跟他們聯絡。
                  </li>
                  <li>
                    如果有錯誤的資料提供給我們必且有詐欺的嫌疑，我們有權把資料提供給相關防制詐騙的機構以便保護他人之權益。
                  </li>
                </ul>
                <ul>
                  <li>
                    除非事前經過您的同意， 魔物地圖 MHNow.cc
                    並不會將您的個人資訊任意提供或洩漏予第三人，但下列狀況則不在本條限制內：
                  </li>
                  <li>
                    為提供本網站服務可能需要與第三人合作，例如：報價、信用卡申請、貸款申請、等，
                    魔物地圖 MHNow.cc
                    有權利將您的個人資訊，在必要範圍內提供予簽訂保密協定之第三人。
                  </li>
                  <li>
                    在法院、檢察署、警察機關或法令之正式要求下， 魔物地圖
                    MHNow.cc 得以將必要之個人資訊內容提供給上列之政府機關。
                  </li>
                  <li>
                    在必要的狀況下， 魔物地圖 MHNow.cc
                    得以分享使用者資訊給第三者以偵查或防範可能發生之非法行為，或是避免任何違反使用者條款或隱私權政策之行為發生。
                  </li>
                  <li>
                    當 魔物地圖 MHNow.cc
                    或本網站被其他第三者購併或收購資產，導致經營權轉換時，魔物地圖
                    MHNow.cc 會於事前將相關細節公告於相關網站，且 魔物地圖
                    MHNow.cc
                    所擁有之全部或部分使用者資訊亦可能在經營權轉換的狀況下移轉給第三人。
                  </li>
                  <li>
                    魔物地圖 MHNow.cc
                    並不會提供個人資料給任何廣告業者，然而，當您在閱讀或瀏覽
                    魔物地圖 MHNow.cc
                    網站平台中的廣告時，因廣告業者的要求，所留下之個人資訊並不在本條款之保護範圍內。
                  </li>
                  <li>
                    其他依法律規定所為之行為或為保護 魔物地圖 MHNow.cc
                    或第三人法律上之權益，為主張權益所為之行為。
                  </li>
                  <li>
                    魔物地圖 MHNow.cc
                    會於您進行網站註冊、使用各項產品或服務、瀏覽網頁、回報使用意見，或是參加促銷廣告方案時，依據您所進行之行動蒐集必要之個人資訊，或是留下您的使用紀錄以備日後查詢。個人資料處理之期限至您通知
                    魔物地圖 MHNow.cc 終止與本網站之會員關係為止。
                  </li>
                  <li>
                    魔物地圖 MHNow.cc 於您使用本網站時，系統會自動紀錄您所在之
                    IP 位置，並記錄您所瀏覽之網頁，與所使用之服務內容。
                  </li>
                  <li>
                    魔物地圖 MHNow.cc
                    於蒐集使用者資訊後，主要目的係用於提供滿足您所需要之產品或服務、改進我們提供之產品或服務、就使用者資料進行系統內部比對以利使用者彼此互通或提供新服務、聯絡使用者、進行市場調查、或提供匿名報告給數位資訊於內部或外部之客戶。
                  </li>
                  <li>
                    若您有使用 Facebook 或其他社群服務，魔物地圖 MHNow.cc
                    可能透過相關社群服務系統設計，於取得您的同意後，將部分本網站的資訊發布於您的社群活動資訊頁面，若您不同意該等訊息之發布，請您勿點選同意鍵，或於事後透過各該社群服務之會員機制移除該等資訊或拒絕本網站繼續發布相關訊息。若有任何問題，仍可與
                    魔物地圖 MHNow.cc 聯絡，魔物地圖 MHNow.cc
                    將協助您確認、處理相關問題。
                  </li>
                </ul>
                <h3>最新訊息通知</h3>
                <p>
                  您同意讓我們及我們的第三方合作夥伴利用電子、書面、電話、電信、網際網路及其他方式於蒐集之特定目的範圍內處理並利用消費者個資進行合作廠商產品之宣傳行銷。
                </p>
                <h3>改善我們的服務</h3>
                <p>
                  為了能持續提供給您最高品質的服務，我們可能會詢問您的意見。您提供給我們的意見只是用在我們公司內部，絕對不會公開。
                </p>
                <h3>Cookies 及電腦資料搜集</h3>
                <p>
                  一個 Cookies
                  是儲存在您的電腦裡面儲存一些有關您的資料的一個檔案。Cookies
                  的用處是幫助我們：
                </p>
                <ul>
                  <li>
                    <span>
                      提供給您一個更客製化的服務經驗。他讓您登入到我們的網站所以您可以查看您之前得到過的報價。
                    </span>
                  </li>
                  <li>
                    研究出一些客戶在我們網站上的習性。我們可以利用這樣的研究看出怎麼提供更好的服務給您。
                  </li>
                  <li>記錄網站裡的數據：瀏覽人次及瀏覽次數。</li>
                </ul>
                <p>
                  通常當您關閉您的瀏覽器的同時，這個 Cookies
                  也會被刪除。這些會被刪除的 Cookies 叫做 Session Cookies。
                  還有另外一種 Cookies 叫做 Persistent Cookies
                  會一直留在您的電腦裡面直到您把它們刪除掉或它們自己過期。當您使用我們的服務的同時，您同意我們使用
                  Cookies。
                </p>
                <p>
                  您可以透過設定您的個人電腦或上網設備，決定是否允許 Cookies
                  技術的使用，若您關閉 Cookies
                  時，可能會造成您使用本網站服務時之不便利或部分功能限制。
                </p>
              </div>

              <div className="mb-7 text-white">
                <h3>保密與安全性</h3>
                <p>
                  對於所有在工作中有必要接觸使用者資料之員工，魔物地圖 MHNow.cc
                  針對每位員工僅提供有限度之使用權限，以確保使用者的資料能獲得最大的保護。
                </p>
                <p>
                  魔物地圖 MHNow.cc
                  擁有資訊安全專職人員負責監督與確保所有在其轄下網站之行為都是合法的，且所有使用者的資訊都獲得最嚴密的保護，但目前所有科技均無法確保網路上之資訊傳遞或購物交易能達
                  100% 安全，因此，魔物地圖 MHNow.cc
                  並無法確保所有使用者在網站上傳遞訊息交易的安全，因此所有使用者在使用網路產品或服務時，均需自行負擔任何網路資訊傳遞與購物交易之風險。
                </p>
                <h3>您的權利</h3>
                <p>
                  您依個人資料保護法享有查詢或請求閱覽、製給複製本、補充或更正、停止蒐集、處理或利用、刪除之權利。
                </p>
                <h3>您的義務</h3>
                <p>
                  魔物地圖 MHNow.cc
                  強烈建議所有使用者不要任意將個人帳戶資料洩漏給第三者，
                </p>
                <p>
                  魔物地圖 MHNow.cc 亦不會透過您未提供之電話或 e-mail
                  您聯繫，但若您決定將個人帳戶資料提供給第三者，您必須負擔資料外洩的所有責任，所有相關之隱私權規定亦以第三者之隱私權政策為依據，若您不慎洩漏帳號，亦請您立即至魔物地圖
                  MHNow.cc下之任一網站更改帳戶資料。
                </p>
                <h3>查閱和更改個人資料</h3>
                <ul>
                  <li>
                    您有權利隨時透過登入本網站之方式，新增、修改或更正您於本網站中所存放之個人資訊。
                  </li>
                  <li>
                    當您同意加入本網站，並同意成為會員，即代表您同意收到任何與
                    魔物地圖 MHNow.cc
                    所提供產品或服務相關之電子郵件，其內容可能包括服務說明、帳號管理資訊、電子報等，除非使用者另行通知，否則將視為所有使用者均同意收到上述相關訊息。
                  </li>
                  <li>
                    若您需要刪除 魔物地圖 MHNow.cc
                    所留存您的所有個人資料時，您必須終止使用本網站及 魔物地圖
                    MHNow.cc 所提供之服務。
                  </li>
                </ul>
                <h3>兒童保護</h3>
                <p>
                  本網站並非特別為兒童設計，未滿12歲之使用者，請勿註冊使用本網站服務，亦請勿提供相關個人資料予本網站；未成年人於註冊或使用本網站服務而同意本網站蒐集、利用其個人資訊時，應在法定代理人或監護人之同意下為之。
                </p>
                <h3>隱私權政策之修改及更新</h3>
                <p>
                  當隱私權政策有任何明顯之更動時，魔物地圖 MHNow.cc 會寄 Email
                  您可以隨時取消訂閱通知您。您可透過按下任何我們發送給您之電子報內的連結去終止收取我們的電子報，連結會放在電子信件的頁尾內，而且無需輸入任何密碼或登入來進行取消訂閱。
                  如果您在我們修改隱私權政策之後使用我們的服務，那就算您已同意新修改後的條款。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
