<?php
//此程序仅用于index.php
//连接数据库
$conn = new mysqli('localhost', 'hacker', '123456', 'newWall');

$sql = "SELECT * FROM posts ORDER BY id DESC LIMIT 1";
$result = mysqli_query($conn, $sql);

$post = mysqli_fetch_array($result);
// 提取数据
$title = $post['title'];
$content = $post['content'];
$author = $post['author'];
$date = $post['date'];
$id = $post['id'];
$pngId = $post['pngId'];
$prevId = max(($id - 1), -1);
if ($prevId == 0) { $prevId = "";}

$html .= <<< EOT
            <!-------------------------------------------php控制部分------------------------------------------------------------->
            <div id="primary" class="content-area">
                <main id="main" class="site-main" role="main">
                    <h1 class="main-title"><i class="fa fa-bookmark-o" aria-hidden="true"></i> 文章</h1>

                    <article class="post post-list-thumb  post-list-show" itemscope="">
                        <div class="post-thumb">
                            <a href="posts/{$id}.html">
                                <img class="lazyload" data-src="../mcdn.kasihappy/2023/03/homepic{$pngId}.png"/>
                            </a>
                        </div>
                        <div class="post-content-wrap">
                            <div class="post-content">
                                <div class="post-date">
                                    <i class="iconfont icon-time"></i>发布于 {$date}
                                </div>
                                <a href="posts/{$id}.html" class="post-title">
                                    <h3><strong>{$title}</strong></h3>
                                </a>
                                <div class="post-meta">
                                    <span><i class="iconfont icon-attention"></i>23333 热度</span>
                                    <span class="comments-number">
                                        <i class="iconfont icon-mark"></i>
                                        <a href="#">{$author}</a>
                                    </span>
                                    <span>
                                        <i class="iconfont icon-file"></i>
					                    <a href="#">CTF相关</a>
					                </span>
                                </div>
                                <div class="float-content">
                                    {$content}
                                </div>
                            </div>
                        </div>
                    </article>


                </main><!-- #main -->
                <div id="pagination"><a href="index{$prevId}.html"> 更早的文章</a></div>
            </div><!-- #primary -->
            <!--------------------------------结束------------------------------------------>
EOT;