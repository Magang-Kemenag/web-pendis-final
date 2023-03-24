import styles from "@/styles/Home.module.css";
import React from "react";

const Twitter = () => (
  <div>
    <a
      class="twitter-timeline"
      data-width="400"
      data-height="600"
      href="https://twitter.com/PendisKemenag"
    >
      Tweets by
    </a>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
  </div>
);

export default Twitter;
