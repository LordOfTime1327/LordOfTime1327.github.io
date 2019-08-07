<?php $path = get_template_directory_uri(); ?>

<section class="wrapper wrapper_double" id="approach">
      <div class="container container_normal container_milk">

        <div class="header header_orange">

          <div class="title">
            <a href="#top" class="title__box">
              <img src="<?php echo $path?>/i/tuff.png" class="tuffLogo" alt="" />
            </a>
            <div class="registration registration_third">
              <a href="#registration" class="registration__link">Registration</a>
            </div>
          </div>

        <section class="video">
          <span class="video__caption">
            App roach <span class="video_dot"></span>
          </span>
          <video src="<?php the_field("video"); ?>" controls="controls" class="video__box"></video>
        </section>
      </div>
</section>

<section class="wrapper_milk">
      <div class="container container_normal container_milk">
        <div class="paragraph">
       
          <?php
            if( have_rows('approach_fields') ):
            while ( have_rows('approach_fields') ) : the_row();
          ?>
            <div class="paragraph__item">
              <div class="boxImg">  
                <img src="<?php the_sub_field('img') ?>" class="boxImg__img" alt="" />
              </div>
              <p class="paragraph__caption"> <?php the_sub_field('title'); ?> </p>
              <p class="paragraph__description"> <?php the_sub_field("text"); ?> </p>
            </div>

          <?php
            endwhile;
            endif;
          ?>

        </div>
      </div>
</section>