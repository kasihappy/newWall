<?php
//验证登录
require 'controller/login/judgeLogin.php';
$html = <<< EOT
<!DOCTYPE html>
<!--
            ◢＼　 ☆　　 ／◣
    　  　∕　　﹨　╰╮∕　　﹨
    　  　▏　　～～′′～～ 　｜
    　　  ﹨／　　　　　　 　＼∕
    　 　 ∕ 　　●　　　 ●　＼
      ＝＝　○　∴·╰╯　∴　○　＝＝
    　    ╭──╮　　　　　╭──╮
  ╔═ ∪∪∪═Mashiro&Hitomi═∪∪∪═╗
-->
<html lang="zh-CN">


<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/><!-- /Added by HTTrack -->
<head>
    <meta http-equiv="x-dns-prefetch-control" content="on"/>
    <meta name="theme-color">
    <meta charset="UTF-8">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <meta name="description" content="一条有远大理想的咸鱼。"/>
    <meta name="keywords" content="Kasi,moeyy blog,萌歪,萌歪的小博客"/>
    <link rel="shortcut icon" href="favicon.ico"/>
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <link id="entry-content-css" rel="prefetch" as="style"
          href="../acdn.kasihappy/wp-content/themes/Sakurairo/css/theme/sakura16b9.css?ver=2.5.2"/>
    <link rel="prefetch" as="script" href="../acdn.kasihappy/wp-content/themes/Sakurairo/js/page16b9.js?ver=2.5.2"/>
    <title>人大校园墙鸭~</title>
    <meta name='robots' content='max-image-preview:large'/>

    <link rel='stylesheet' id='wp-block-library-css'
          href='../acdn.kasihappy/wp-includes/css/dist/block-library/style.min.css' type='text/css' media='all'/>
    <link rel='stylesheet' id='classic-theme-styles-css' href='../acdn.kasihappy/wp-includes/css/classic-themes.min.css'
          type='text/css' media='all'/>
    <style id='global-styles-inline-css' type='text/css'>
        body {
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
            --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
            --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
            --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
            --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
            --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
            --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
            --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
            --wp--preset--font-size--small: 13px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 36px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
        }

        :where(.is-layout-flex) {
            gap: 0.5em;
        }

        body .is-layout-flow > .alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em;
        }

        body .is-layout-flow > .alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0;
        }

        body .is-layout-flow > .aligncenter {
            margin-left: auto !important;
            margin-right: auto !important;
        }

        body .is-layout-constrained > .alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em;
        }

        body .is-layout-constrained > .alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0;
        }

        body .is-layout-constrained > .aligncenter {
            margin-left: auto !important;
            margin-right: auto !important;
        }

        body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
            max-width: var(--wp--style--global--content-size);
            margin-left: auto !important;
            margin-right: auto !important;
        }

        body .is-layout-constrained > .alignwide {
            max-width: var(--wp--style--global--wide-size);
        }

        body .is-layout-flex {
            display: flex;
        }

        body .is-layout-flex {
            flex-wrap: wrap;
            align-items: center;
        }

        body .is-layout-flex > * {
            margin: 0;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }

        .wp-block-navigation a:where(:not(.wp-element-button)) {
            color: inherit;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        .wp-block-pullquote {
            font-size: 1.5em;
            line-height: 1.6;
        }
    </style>
    <link rel='stylesheet' id='saukra-css-css' href='../acdn.kasihappy/wp-content/themes/Sakurairo/style.css'
          type='text/css' media='all'/>
    <style>
        .site-top .lower nav {
            display: block !important;
        }

        :root {
            --theme-skin: #f9b907;
            --theme-skin-matching: #ef7437;
            --infor_bar_bgcolor: rgba(255, 255, 255, 0.92);
            --style_menu_background_color: rgba(249, 185, 7, 0.78);
            --style_menu_selection_radius: 15px;
            --post_date_text_color: #fc9b0a;
            --load_nextpage_svg: url("../acdn.kasihappy/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/load_svg/ball.svg");
            --style_menu_radius: 10px;
            --post-list-thumb: #a5a5a5;
            --style_menu_selection_color: #e8e8e8;
            --shuoshuo_background_color1: #ef7437;
            --shuoshuo_background_color2: #ef7437;
            --theme-skin-dark: #6472ff;
            --global-font-weight: 300;
            --theme-dm-background_transparency: 0.8;
            --area_title_bottom_color: #e8e8e8;
        }

        .the-feature.from_left_and_right .info, .the-feature.from_left_and_right .info h3 {
            background: rgba(255, 255, 255, 0.4);
        }

        /*白猫样式Logo*/
        .logolink {
            font-family: 'wenyihei-subfont', 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
        }

        .logolink .sakuraso {
            background-color: rgba(255, 255, 255, .5);
            border-radius: 5px;
            color: #f9b907;
            height: auto;
            line-height: 25px;
            margin-right: 0;
            padding-bottom: 0px;
            padding-top: 1px;
            text-size-adjust: 100%;
            width: auto
        }

        .logolink a:hover .sakuraso {
            background-color: #ef7437;
            color: #fff;
        }

        .logolink a:hover .shironeko,
        .logolink a:hover .no,
        .logolink a:hover rt {
            color: #ef7437;
        }

        .logolink.moe-mashiro a {
            color: #f9b907;
            float: left;
            font-size: 25px;
            font-weight: 800;
            height: 56px;
            line-height: 56px;
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 8px;
            text-decoration-line: none;
        }

        @media (max-width: 860px) {
            .logolink.moe-mashiro a {
                color: #f9b907;
                float: left;
                font-size: 25px;
                font-weight: 800;
                height: 56px;
                line-height: 56px;
                padding-left: 6px;
                padding-right: 15px;
                padding-top: 11px;
            }
        }

        .logolink.moe-mashiro .sakuraso, .logolink.moe-mashiro .no {
            font-size: 25px;
            border-radius: 9px;
            padding-bottom: 2px;
            padding-top: 5px;
        }

        .logolink.moe-mashiro .no {
            font-size: 20px;
            display: inline-block;
            margin-left: 5px;
        }

        .logolink a:hover .no {
            -webkit-animation: spin 1.5s linear infinite;
            animation: spin 1.5s linear infinite;
        }

        .logolink ruby {
            ruby-position: under;
            -webkit-ruby-position: after;
        }

        .logolink ruby rt {
            font-size: 10px;
            letter-spacing: 2px;
            transform: translateY(-15px);
            opacity: 0;
            transiton-property: opacity;
            transition-duration: 0.5s, 0.5s;
        }

        .logolink a:hover ruby rt {
            opacity: 1
        }


        /*非全局色彩管理*/
        .post-date {
            background-color: rgba(249, 185, 9, 0.23);
        }

        .center-text {
            color: #ffffff;
            font-size: 120px;
        }

        .Ubuntu-font, .center-text {
            font-family: 100pxUbuntu, sans-serif;
        }

        .notice i,
        .notice {
            color: #ffffff;
        }

        .notice {
            border: 1px solid #E6E6E6;
        }

        .entry-content th {
            background-color: #f9b907
        }


        #centerbg {
            background: #0000;
        }

        /*预加载部分*/


        /*深色模式*/
        /*可变项目*/

        /*深色模式控件透明度*/
        body.dark .header-info,
        body.dark .top-social img {
            color: #fff;
            background: rgba(51, 51, 51, 0.8);
        }

        body.dark .the-feature.from_left_and_right .info {
            background-color: rgba(51, 51, 51, 0.8);
        }

        body.dark .yya,
        body.dark .widget-area,
        body.dark .skin-menu,
        body.dark input[type=submit] {
            background-color: rgba(38, 38, 38, 0.8) !important;
        }

        /*深色模式自定义颜色*/
        body.dark .headertop-down i {
            color: #f9b907 !important;
        }

        /*深色模式图像亮度*/
        body.dark img,
        body.dark .highlight-wrap,
        body.dark iframe,
        body.dark .entry-content .aplayer,
        body.dark .post-thumb video {
            filter: brightness(0.8);
        }

        @media (max-width: 1200px) {
            body.dark .site-top .lower nav.navbar ul {
                background: rgba(255, 255, 255, 0);
            }
        }

        /*字体*/


        .serif {
            font-family: !important ;
            font-size: 16px;
        }

        body {
            font-family: !important;
            font-size: 16px;
        }

        h1.main-title, h1.fes-title {
            font-family: ZCOOL KuaiLe;
        }

        .header-info p {
            font-family: ZCOOL KuaiLe !important;
            font-size: 18px;
        }

        .cbp_tmtimeline > li .cbp_tmlabel {
            font-family: Noto Serif SC !important;
        }

        .post-list-thumb .post-title h3 {
            font-size: 18px !important;
        }

        .post-meta, .post-meta a {
            font-size: 12px !important;
        }

        .pattern-center h1.cat-title,
        .pattern-center h1.entry-title {
            font-size: 40px;
        }

        .pattern-center-sakura h1.cat-title,
        .pattern-center-sakura h1.entry-title {
            font-size: 40px !important;
        }

        .single-center .single-header h1.entry-title {
            font-size: 32px;
        }

        /*鼠标*/
        body {
            cursor: url(https://acdn.moeyy.cn/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/cursor/normal.cur), auto;
        }

        .headertop-down i,
        .faa-parent.animated-hover:hover > .faa-spin,
        .faa-spin.animated,
        .faa-spin.animated-hover:hover,
        i.iconfont.js-toggle-search.iconsearch,
        #waifu #live2d,
        .aplayer svg,
        .aplayer.aplayer-narrow .aplayer-body,
        .aplayer.aplayer-narrow .aplayer-pic,
        #emotion-toggle,
        .emoji-item,
        .emotion-box,
        .emotion-item,
        .on-hover,
        .tieba-container span,
        #moblieGoTop,
        #changskin {
            cursor: url(https://acdn.moeyy.cn/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/cursor/No_Disponible.cur), auto;
        }

        a,
        .ins-section .ins-section-header,
        .font-family-controls button,
        .menu-list li, .ins-section .ins-search-item,
        .ins-section .ins-search-item .ins-search-preview {
            cursor: url(https://acdn.moeyy.cn/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/cursor/ayuda.cur), auto;
        }

        p,
        .highlight-wrap code,
        .highlight-wrap,
        .hljs-ln-code .hljs-ln-line {
            cursor: url(https://acdn.moeyy.cn/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/cursor/texto.cur), auto;
        }

        a:active {
            cursor: url(https://acdn.moeyy.cn/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/cursor/work.cur), alias;
        }

        /*背景类*/
        .comment-respond textarea {
            background-image: url();
        }

        .search-form.is-visible {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/basic/iloli.gif);
        }

        .site-footer {
            background-color: rgba(255, 255, 255, 1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .wrapper {
            background-color: rgba(255, 255, 255, 1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        /*首页圆角设置*/
        .header-info {
            border-radius: 15px;
        }

        .focusinfo img {
            border-radius: 20px;
        }

        .focusinfo .header-tou img {
            border-radius: 100px;
        }

        /*标题横线动画*/
        .single-center header.single-header .toppic-line {
            position: relative;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            animation: lineWidth 2.5s;
            animation-fill-mode: forwards;
        }

        @keyframes lineWidth {
            0% {
                width: 0;
            }
            100% {
                width: 100%;
            }
        }

        /*标题动画*/
        .entry-title, .single-center .entry-census a, .entry-census, .post-list p, .post-more i, .p-time, .feature {
            -moz-animation: fadeInUp 2s;
            -webkit-animation: fadeInUp 2s;
            animation: fadeInUp 2s;
        }

        @-moz-keyframes fadeInUp {
            0% {
                -moz-transform: translateY(200%);
                transform: translateY(200%);
                opacity: 0
            }

            50% {
                -moz-transform: translateY(200%);
                transform: translateY(200%);
                opacity: 0
            }

            100% {
                -moz-transform: translateY(0%);
                transform: translateY(0%);
                opacity: 1
            }
        }

        @-webkit-keyframes fadeInUp {
            0% {
                -webkit-transform: translateY(200%);
                transform: translateY(200%);
                opacity: 0
            }

            50% {
                -webkit-transform: translateY(200%);
                transform: translateY(200%);
                opacity: 0
            }

            100% {
                -webkit-transform: translateY(0%);
                transform: translateY(0%);
                opacity: 1
            }
        }

        @keyframes fadeInUp {
            0% {
                -moz-transform: translateY(200%);
                -ms-transform: translateY(200%);
                -webkit-transform: translateY(200%);
                transform: translateY(200%);
                opacity: 0
            }

            50% {
                -moz-transform: translateY(200%);
                -ms-transform: translateY(200%);
                -webkit-transform: translateY(200%);
                transform: translateY(200%);
                opacity: 0
            }

            100% {
                -moz-transform: translateY(0%);
                -ms-transform: translateY(0%);
                -webkit-transform: translateY(0%);
                transform: translateY(0%);
                opacity: 1
            }
        }

        /*首页封面动画*/
        h1.main-title, h1.fes-title, .the-feature.from_left_and_right .info, .header-info p, .header-info, .focusinfo .header-tou img, .top-social img, .center-text {
            -moz-animation: fadeInDown 0.2s;
            -webkit-animation: fadeInDown 0.2s;
            animation: fadeInDown 0.2s;
        }

        @-moz-keyframes fadeInDown {
            0% {
                -moz-transform: translateY(-100%);
                transform: translateY(-100%);
                opacity: 0
            }

            50% {
                -moz-transform: translateY(-100%);
                transform: translateY(-100%);
                opacity: 0
            }

            100% {
                -moz-transform: translateY(0%);
                transform: translateY(0%);
                opacity: 1
            }
        }

        @-webkit-keyframes fadeInDown {
            0% {
                -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
                opacity: 0
            }

            50% {
                -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
                opacity: 0
            }

            100% {
                -webkit-transform: translateY(0%);
                transform: translateY(0%);
                opacity: 1
            }
        }

        @keyframes fadeInDown {
            0% {
                -moz-transform: translateY(-100%);
                -ms-transform: translateY(-100%);
                -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
                opacity: 0
            }

            50% {
                -moz-transform: translateY(-100%);
                -ms-transform: translateY(-100%);
                -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
                opacity: 0
            }

            100% {
                -moz-transform: translateY(0%);
                -ms-transform: translateY(0%);
                -webkit-transform: translateY(0%);
                transform: translateY(0%);
                opacity: 1
            }
        }

        /*导航菜单动画*/
        .site-top ul {
            -moz-animation: fadeInLeft 2s;
            -webkit-animation: fadeInLeft 2s;
            animation: fadeInLeft 2s;
        }

        @-moz-keyframes fadeInLeft {
            0% {
                -moz-transform: translateX(100%);
                transform: translateX(100%);
                opacity: 0
            }

            50% {
                -moz-transform: translateX(100%);
                transform: translateX(100%);
                opacity: 0
            }

            100% {
                -moz-transform: translateX(0%);
                transform: translateX(0%);
                opacity: 1
            }
        }

        @-webkit-keyframes fadeInLeft {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
                opacity: 0
            }

            50% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
                opacity: 0
            }

            100% {
                -webkit-transform: translateX(0%);
                transform: translateX(0%);
                opacity: 1
            }
        }

        @keyframes fadeInLeft {
            0% {
                -moz-transform: translateX(100%);
                -ms-transform: translateX(100%);
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
                opacity: 0
            }

            50% {
                -moz-transform: translateX(100%);
                -ms-transform: translateX(100%);
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
                opacity: 0
            }

            100% {
                -moz-transform: translateX(0%);
                -ms-transform: translateX(0%);
                -webkit-transform: translateX(0%);
                transform: translateX(0%);
                opacity: 1
            }
        }

        /*其他*/

        .widget-area .sakura_widget {
            background-image: url();
        }

        .headertop {
            border-radius: 0 0 15px 15px;
        }

        .post-footer {
            display: none;
        }


        .post-list-thumb:nth-child(2n) .post-content-wrap {
            float: left;
            padding-left: 30px;
            padding-right: 0;
            text-align: right;
            margin: 20px 10px 10px 0
        }

        .post-list-thumb:nth-child(2n) .post-thumb {
            float: left
        }

        .post-list-thumb:nth-child(2n) .post-thumb a {
            border-radius: 10px 0 0 10px
        }

        .pattern-center::after {
            display: none;
        }

        .pattern-center-blank {
            display: none;
        }

        .yya {
            position: fixed;
            -webkit-transition: all 1s ease !important;
            transition: all 1s ease !important;
            width: 95%;
            left: calc(97.5% - 95%);
            box-shadow: 0 1px 40px -8px rgba(255, 255, 255, .4);
            border-radius: 32px !important;
        }

        .site-title img {
            margin-left: 10px;
        }

        .site-header {
            border-radius: 32px !important;
        }

        .header-user-menu {
            border-radius: 15px !important;
        }

        .lower li ul {
            border-radius: 15px !important;
        }

        @media (max-width: 860px) {
            .openNav .icon {
                left: 5vw;
            }

            .site-header {
                width: 100%;
                height: 60px;
                top: 0;
                left: 0;
                background: 0 0;
                position: fixed;
                border-radius: 0 !important;
            }

            .yya {
                border-radius: 0 !important;
            }
        }


        .the-feature.from_left_and_right {
            position: relative;
            border-radius: 32px;
            height: 160px;
            width: 258px;
            margin: 6px 6px 0 6px;
        }

        .the-feature img {
            height: 160px;
            width: 258px;
        }


        .notice {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/hyouryu/announcement_bg.jpg);
            background-repeat: round;
            border: none;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
        }

        .yya {
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }

        body {
            background-size: cover;
        }

        #video-add {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/add.png);
        }

        body.dark .post-footer {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/creativecommons-dark.png);
        }

        @media (max-width: 860px) {
            .headertop.filter-dot::before {
                background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/grid.png);
            }
        }

        .post-footer {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/creativecommons-light.png);
        }

        .headertop.filter-grid::before {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/grid.png);
        }

        .headertop.filter-dot::before {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/dot.gif);
        }

        .loadvideo, .video-play {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/play.png);
        }

        .video-pause {
            background-image: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/stop.png);
        }

        #loading-comments {
            background-image: url(https://acdn.moeyy.cn/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/load_svg/ball.svg);
        }

        #banner_wave_1 {
            background: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/wave1.png) repeat-x;
        }

        #banner_wave_2 {
            background: url(../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/basic/wave2.png) repeat-x;
        }

    </style>
    <link rel="stylesheet" href="../acdn.kasihappy/wp-content/googlefonts/fonts.css" media="all">
    <script type="text/javascript">
        if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
            alert('朋友，IE浏览器未适配哦~\n如果是 360、QQ 等双核浏览器，请关闭 IE 模式！');
        }
    </script>
</head>

<body class="home blog group-blog hfeed chinese-font  ">
<div class="scrollbar" id="bar"></div>
<header class="site-header no-select" role="banner">
    <div class="site-top">
        <div class="site-branding">
            <span class="site-title">
                <span class="logolink moe-mashiro">
                    <a href="index.html">
                        <ruby>
                            <span class="sakuraso">RUC</span>
                            <span class="no">の</span>
                            <span class="shironeko">Wall</span>
                            <rp></rp>
                            <rt class="chinese-font">人大校园墙</rt>
                            <rp></rp>
                        </ruby>
                    </a>
                </span>
            </span>
            <!-- logo end -->
        </div><!-- .site-branding -->
        <div class="header-user-avatar">
            <a href="#">
                <img class="faa-shake animated-hover"
                     src="../acdn.kasihappy/jsdelivr/gh/Fuukei/Public_Repository@latest/vision/basic/topavatar.png"
                     width="30" height="30">
            </a>
            <div class="header-user-menu">
                <div class="herder-user-name no-logged">
                    <a id="login-link" href="#" data-no-pjax style="font-weight:bold;text-decoration:none">登录</a>
                </div>
            </div>
        </div>
        <div class="searchbox"><i class="iconfont js-toggle-search iconsearch icon-search"></i></div>
        <div class="lower">
            <nav>
                <ul id="menu-menu-1" class="menu">
                    <li class="current-menu-item"><a href="index.html" aria-current="page"><i class="fa fa-home"></i>
                        <b>主页</b></a></li>
                    <li><a href="author/admin.html"><i class="fa fa-list-alt"></i> <b>文章</b></a>
                        <ul class="sub-menu">
                            <li><a href="timeline/index.html"><i class="fa fa-clock-o"></i> <b>时光轴</b></a></li>
                        </ul>
                    </li>
                    <li><a href="shuo/index.html"><i class="fa fa-pencil"></i> <b>说说</b></a></li>
                    <li><a href="guestbook/index.html"><i class="fa fa-commenting-o"></i> <b>留言板</b></a></li>
                    <li><a href="links/index.html"><i class="fa fa-link"></i> <b>友人帐</b></a></li>
                    <li><a href="bangumi/index.html"><i class="fa fa-film"></i> <b>追番</b></a></li>
                    <li><a href="app/index.html"><i class="fa fa-cube"></i> <b>Kasi Apps</b></a></li>
                    <li><a href="#"><i class="fa fa-bars"></i> <b>更多</b></a>
                        <ul class="sub-menu">
                            <li><a href="https://chatmindai.com/"><i class="fa fa-play-circle"></i> Online Chat</a></li>
                        </ul>
                    </li>
                </ul>
            </nav><!-- #site-navigation -->
        </div>
    </div>
</header><!-- #masthead -->
<div class="openNav no-select">
    <div class="iconflat no-select">
        <div class="icon"></div>
    </div>
</div><!-- m-nav-bar -->
<section id="main-container">
    <div class="headertop filter-dim">
        <div id="banner_wave_1"></div>
        <div id="banner_wave_2"></div>
        <figure id="centerbg" class="centerbg">
            <div class="focusinfo">
                <h1 class="center-text glitch is-glitching Ubuntu-font" data-text="人大校园墙">
                    人大校园墙</h1>
                <div class="header-info">
                    <i class="fa fa-quote-left"></i> <span class="element">The quieter you are, the more you listen</span>
                    <i class="fa fa-quote-right"></i> <span class="element"></span>
                    <p></p>
                </div>
                <div class="top-social">
                    <li id="bg-pre"><img
                            src="../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/display_icon/muh2/pre.png"
                            loading="lazy" alt="上一篇"/></li>
                    <li><a href="https://space.bilibili.com/495235331" target="_blank" class="social-bili"
                           title="bilibili"><img alt="bilibili" loading="lazy"
                                                 src="../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/display_icon/muh2/bilibili.png"/></a>
                    </li>
                    <li><a href="tencent://message/?uin=1714307747" target="_blank" class="social-qq" title="qq"><img
                            alt="qq" loading="lazy"
                            src="../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/display_icon/muh2/qq.png"/></a>
                    </li>
                    <li><a href="#" class="social-wangyiyun" title="cloudmusic"><img alt="cloudmusic"
                                                                                                     loading="lazy"
                                                                                                     src="../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/display_icon/muh2/ncm.png"/></a>
                    </li>
                    <li><a href="#" class="social-wangyiyun" title="Discord"><img alt="Discord"
                                                                                                  loading="lazy"
                                                                                                  src="../acdn.kasihappy/jsdelivr/gh/moeyys/blog@master/discord.png"/></a>
                    </li>
                    <li><a href="#" class="social-wangyiyun" title="Mastodon"><img alt="Mastodon"
                                                                                                   loading="lazy"
                                                                                                   src="../acdn.kasihappy/jsdelivr/gh/moeyys/blog@master/mastodon.png"/></a>
                    </li>
                    <li><a href="#" class="social-wangyiyun" title="E-mail"><img loading="lazy"
                                                                                   alt="E-mail"
                                                                                   src="../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/display_icon/muh2/mail.png"/></a>
                    </li>
                    <li id="bg-next"><img loading="lazy"
                                          src="../acdn.kasihappy/jsdelivr/gh/Fuukei/Sakurairo_Vision@2.5/display_icon/muh2/next.png"
                                          alt="下一篇"/></li>
                </div>
            </div>
        </figure>
<!--        <div id="video-container" style="">
            <video id="bgvideo" class="video" preload="auto"></video>
            <div id="video-btn" class="loadvideo videolive"></div>
            <div id="video-add"></div>
            <div class="video-stu"></div>
        </div>&lt;!&ndash; 首页下拉箭头 &ndash;&gt;-->
<!--        <div class="headertop-down faa-float animated" onclick="headertop_down()">
            <span>
                <i class="fa fa-chevron-down" aria-hidden="true" style="color:rgba(255,255,255,0.8)"></i>
            </span>
        </div>-->
    </div>
    <div id="page" class="site wrapper">
        <div class="blank"></div>
        <div id="content" class="site-content">


            <div class="notice" style="margin-top:60px">
                <i class="iconfont icon-notification"></i>
                <div class="notice-content">欢迎来到人大墙~看看有没有什么新鲜事吧~</div>
            </div>





EOT;

echo $html;
require 'controller/post/showPost.php';

$html = <<< EOT



        </div><!-- #content -->
    </div><!-- #page Pjax container-->
    <footer id="colophon" class="site-footer" role="contentinfo">
        <div class="site-info" theme-info="Sakurairo v2.5.2">
            <div class="footer-device Ubuntu-font">
                <span style="color: #b9b9b9;">
						<a href="https://github.com/mirai-mamori/Sakurairo" rel="noopener" target="_blank"
                           id="site-info">Theme Sakurairo</a>
                </span>
            </div>
        </div><!-- .site-info -->
    </footer><!-- #colophon -->
</section><!-- #section -->
<!-- m-nav-center -->

<!-- search start -->

<!-- search end -->
<script type='text/javascript' src='../acdn.kasihappy/wp-content/themes/Sakurairo/js/smoothscroll.js'
        id='SmoothScroll-js'></script>
<script type='text/javascript' src='../acdn.kasihappy/wp-content/themes/Sakurairo/js/polyfills.js'
        id='polyfills-js'></script>
<script type='text/javascript' id='app-js-before'>
    var _iro = {
        "pjax": true,
        "movies": {
            "url": "",
            "name": "",
            "live": true,
            "loop": true
        },
        "windowheight": "auto",
        "ajaxurl": "",
        "order": "asc",
        "formpostion": "bottom",
        "api": "",
        "nonce": "1f61ef9c79",
        "google_analytics_id": "",
        "gravatar_url": "",
        "NProgressON": true,
        "audio": false,
        "baguetteBox": false,
        "fancybox": false,
        "darkmode": false,
        "email_domain": "moeyy.cn",
        "email_name": "admin",
        "ext_shared_lib": 0,
        "cookie_version_control": "Kasi",
        "qzone_autocomplete": false,
        "site_name": "RUC Wall",
        "author_name": "Kasi",
        "template_url": "",
        "site_url": "",
        "qq_api_url": "",
        "land_at_home": true,
        "live_search": false,
        "loading_ph": "",
        "clipboardCopyright": false,
        "entry_content_style": "sakurairo",
        "random_graphs_mts": false,
        "code_highlight": "prism",
        "comment_upload_img": false,
        "cache_cover": true,
        "site_bg_as_cover": true,
        "yiyan_api": [""],
        "skin_bg0": "",
        "cover_api": "",
        "jsdelivr_css_src": "",
        "float_player_on": true,
        "meting_api_url": "",
        "code_highlight_prism": {
            "line_number_all": true,
            "autoload_path": "",
            "theme": {"dark": "t"}
        }
    }
</script>
<script type='text/javascript' src='../acdn.kasihappy/wp-content/themes/Sakurairo/js/app.js' id='app-js'></script>

<!-- 首页波浪特效 -->
<link rel="stylesheet" href="../acdn.kasihappy/wp-content/themes/Sakurairo/css/wave.css">

<!-- logo字体部分 -->
<link rel="stylesheet" href="../acdn.kasihappy/jsdelivr/gh/acai66/mydl/fonts/wenyihei/wenyihei-subfont.css" media="all">
</body>
<!-- Particles动效 -->

</html>
EOT;
