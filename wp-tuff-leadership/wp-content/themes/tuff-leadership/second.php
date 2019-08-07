<?php $path = get_template_directory_uri(); ?>

<section class="wrapper" id='second'>
      <div class="container">
          <div class="registration">
            <a href="#registration" class="registration__link">Registration</a>
          </div>


          <div class="main">
            <div class="text">
              <?php the_field("list") ?>
            </div>
            <div class="tuff">
              <div class="tuff__snake">
                  <embed src="<?php echo $path?>/i/snake.svg" type="">
              </div>
              <span class="tuff__text">tuff</span>
            </div>
          </div>

          <a href="#approach" class="scroll">
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