<?php $path = get_template_directory_uri(); ?>

<section class="wrapper wrapper_milk" id="coach">
  <div class="container container_milk">
    <div class="header">
      <div class="title">
        <a href="#top" class="title__box">
          <img src="<?php echo $path?>/i/tuff.png" class="tuffLogo" alt="" />
        </a>
      <div class="registration registration_third">
        <a href="#registration" class="registration__link">Registration</a>
      </div>
    </div>

      <div>
        <span class="coaches-title">
          Coaches <span class="coaches-title__dot"></span>
        </span>
      </div>
  

  <div class="coaches">
          <?php
            if( have_rows('coach_repeater') ):
            while ( have_rows('coach_repeater') ) : the_row();
          ?>

              <div class="coaches__item">      
                <div class="photo">
                  <img src="<?php the_sub_field('img')?>" alt="" class="photo__img" />
                </div>
                <div class="text">
                  <p class="text__name">
                    <?php the_sub_field('title'); ?> 
                  </p>
                  <p class="text__info"> <?php the_sub_field('text'); ?> </p>
                  </div>
              </div>
          <?php 
            endwhile;
            endif;
          ?>
    </div>
  </div>  
</section>
