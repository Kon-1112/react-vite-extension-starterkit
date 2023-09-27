<h1>Vite + React + TypeScript + Redux + Tailwind CSSを用いたChrome拡張機能スターターキット</h1>
<p>A Chrome Extension Starter Kit using Vite + React + TypeScript + Redux + Tailwind CSS</p>
<hr>
<h3>概要</h3>
<p>
Chrome拡張機能をVite, React, TypeScript, Reduxで開発するためのスターターキットです
<br>
ESlintとPrettierも導入しているため、コード整形も可能です
</p>
<h3>Overview</h3>
<p>
This is a starter kit for developing Chrome extensions with Vite, React, TypeScript, and Redux.
<br>
ESlint and Prettier are also installed, so code formatting is possible.
</p>
<hr>
<h3>対応ブラウザ : Supported Browsers</h3>
<table>
  <tr>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/452180/chrome.svg" alt="chrome" width="48" height="48">
    </td>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/378791/edge.svg" alt="edge" width="48" height="48">
    </td>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/378765/vivaldi.svg" alt="vivaldi" width="48" height="48">
    </td>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/452079/opera.svg" alt="opera" width="48" height="48">
    </td>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/378778/brave.svg" alt="brave" width="48" height="48">
    </td>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/452096/safari.svg" alt="safari" width="48" height="48">
    </td>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/452204/firefox.svg" alt="firefox" width="48" height="48">
    </td>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/452226/ie.svg" alt="ie" width="48" height="48">
    </td>
    <td style="vertical-align: middle; text-align: center; width: 90px; height: 90px;">
      <img src="https://www.svgrepo.com/show/452117/tor.svg" alt="tor" width="48" height="48">
    </td>
  </tr>
  <tr>
    <td align="center">Chrome</td>
    <td align="center">Edge</td>
    <td align="center">Vivaldi</td>
    <td align="center">Opera</td>
    <td align="center">Brave</td>
    <td align="center">Safari</td>
    <td align="center">Firefox</td>
    <td align="center">IE</td>
    <td align="center">Tor</td>
  </tr>
  <tr>
    <td align="center"><b>対応</b></td>
    <td align="center"><b>対応</b></td>
    <td align="center"><b>対応</b></td>
    <td align="center"><b>対応</b></td>
    <td align="center"><b>対応</b></td>
    <td align="center">非対応</td>
    <td align="center">非対応</td>
    <td align="center">非対応</td>
    <td align="center">非対応</td>
  </tr>
</table>
<hr>
<h3>技術スタック : Tech Stack</h3>
<table>
  <tr>
    <td align="center">HTML</td>
    <td align="center">CSS</td>
    <td align="center">JavaScript</td>
    <td align="center">Typescript</td>
    <td align="center">React</td>
    <td align="center">
        <a href="https://reactrouter.com/en/main/start/overview">
            React<br>Router
        </a>
    </td>
    <td align="center">
        <a href="https://react-icons.github.io/react-icons/icons?name=fa6">
            React<br>Icons
        </a>   
    </td>
    <td align="center">
        <a href="https://mui.com/material-ui/react-autocomplete">
            Material UI
        </a>
    </td>
    <td align="center">
        <a href="https://swr.vercel.app/ja">
            SWR
        </a>
    </td>
    <td align="center">
        <a href="https://jotai.org/">
            Jotai
        </a>
    </td>
    <td align="center">
        <a href="https://tailwindcss.com/docs/aspect-ratio">
            Tailwind<br>css
        </a>
    </td>
    <td align="center">
        <a href="https://lodash.com/docs/4.17.15">
            Lodash
        </a>
    </td>
    <td align="center">sass</td>
    <td align="center">Node<br>v20.7.0</td>
    <td align="center">npm<br>v9.5.0</td>
    <td align="center">Vite 2</td>
    <td align="center">ESlint</td>
    <td align="center">Prettier</td>
    <td align="center">Chrome<br>Extension</td>
    <td align="center">Git</td>
</table>
<hr>
<h3>環境構築 : Setup</h3>
<ol>
    <li>
        リポジトリをCloneします : clone this repository
        <pre>git clone git@github.com:Kon-1112/react-vite-extension-template.git</pre>
    </li>
    <li>
        リポジトリのディレクトリに移動します : move to the repository directory
        <pre>cd react-vite-extension-template</pre>
    </li>
    <li>
        必要なモジュールをインストールします : install modules
        <pre>npm install</pre>
    </li>
    <li>
        開発用のサーバーを起動します : start development server
        <pre>npm run dev</pre>
    </li>
    <li>
        Chromeの拡張機能ページを開きます : open Chrome extension page
        <pre>chrome://extensions/</pre>
    </li>
    <li>
        「パッケージ化されていない拡張機能を読み込む」からdistフォルダを読込みます : load dist folder
    </li>
</ol>
<hr>
<h3>ビルド : Build</h3>
<ol>
    <li>
        <pre>npm run build</pre>
    </li>
</ol>
<hr>