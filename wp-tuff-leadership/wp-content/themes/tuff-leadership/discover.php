<?php $path = get_template_directory_uri(); ?>

<section class=" wrapper wrapper_milk" id="discover">
      <div class="container">
          <div class="header">
              <div class="title">
                <a href="#top" class="title__box">
                  <img src="<?php echo $path?>/i/tuff.png" class="tuffLogo" alt="" />
                </a>
                <div class="registration registration_third">
                  <a href="#registration" class="registration__link">Registration</a>
                </div>
              </div>
              <div class="date">
                  <p class="date__info"><?php the_field('date') ?></p>
                  <img src="<?php echo $path?>/i/whiteDots.png" alt="" class="date__dots">
                  <p class="date__price">Price <?php the_field('price') ?></p>
              </div>
            </div>

            

            <div class="course-description">
              <p class="course-description__question"><?php the_field('question') ?></p>
              <div class="course-description__snake">
                <embed src="<?php echo $path?>/i/snake.svg" type="">
              </div>
              <p class="course-description__answer"><?php the_field('answer') ?></p>
              </div>

            <div class="content">
              <div class="content__text">
                <p class="content__text_first"><?php the_field('content_wys') ?></p>
              </div>
              <div class="content__caption"><?php the_field('content_title') ?></div>
            </div>

              <?php 
                $images = get_field('slider');
                if( $images ): ?>
                    <div class="slider">
                    <?php foreach( $images as $image ): ?>
                      <div class="slider__item">
                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="slider__img">
                      </div>
                      <?php endforeach; ?>
                    </div>
                <?php endif; ?>

            <div class="discover">
              <p class="discover__caption">You will discover <span class="discover__dot"></span></p>
                <?php the_field('discover_wys') ?>
            </div>
          </div>
    </section>