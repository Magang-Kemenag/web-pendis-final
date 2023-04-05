import styles from "@/styles/Home.module.css";
import React from "react";

const Twitter = () => (
  <div className="bg-white rounded-xl border h-[550px] p-4">
    <div className="border-b">
      <div className="text-ftitle text-lg font-bold py-2.5 px-2">Twitter</div>
    </div>
    <div>
      <a
        className="twitter-timeline"
        data-height="450"
        href="https://twitter.com/PendisKemenag"
      >
        Tweets by
      </a>
    </div>
    <div>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  </div>
);

export default Twitter;
