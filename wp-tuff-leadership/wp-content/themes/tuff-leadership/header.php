<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    
    <?php wp_head() ?>

  </head>
  <body>

  <?php $path = get_template_directory_uri(); ?>

    <section id="top" class="wrapper wrapper_double">
      
      <div class="container container_double">
        <div class="registration">
          <a href="#registration" class="registration__link">Registration</a>
        </div>
       
        <div class="info">
          <span class="info__place"><?php the_field("place") ?></span>
          <span class="info__date"><?php the_field("date") ?></span>
        </div>

        <div class="caption">
          <span class="caption__title">
            tuff<span class="caption__dot"></span
            ><span class="caption__secondTitle">leadership trainig</span>
          </span>

          <p class="caption__text">
            <?php the_field("intro") ?>
          </p>

          <div class="caption__snake">
              <embed src="<?php echo $path?>/i/snake.svg" type="">
          </div>
        </div>

        <a href="#second" class="scroll">
          <span class="scroll__arrow">
            <embed src="<?php echo $path?>/i/arrow.svg" type="">
          </span>
          <span class="scroll__text">Scroll</span>
        </a>

        <div class="logo">
            <embed src="<?php echo $path?>/i/logo.svg" type="">
        </div>
      </div>
    </section>
