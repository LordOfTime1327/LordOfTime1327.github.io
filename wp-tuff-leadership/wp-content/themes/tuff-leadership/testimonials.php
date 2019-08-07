<?php $path = get_template_directory_uri(); ?>

<section class="wrapper wrapper_milk" id="testimonials">
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
            </div>         

           <div class="testimonials">
             <div class="testimonials-box">
              <p class="testimonials-box__caption"><span class="testimonials-box__qout">&#10077;</span> Testimonials</p>


              <?php
                if( have_rows('flag_repeater') ):
                while ( have_rows('flag_repeater') ) : the_row();
              ?>    
              <div class="testimonials-box__item">
                 <div class="flag">
                  <img src="<?php echo $path?>/i/whiteDots.png" alt="" class="testimonials-box__dots">
                   <img src="<?php the_sub_field('img') ?>" class="testimonials-box__flag">
                 </div>
                 <div class="testimonialsText">
                   <p class="testimonialsText__caption"><?php the_sub_field('title') ?></p>
                    <p class="testimonialsText__info"><?php the_sub_field('text') ?></p>
                 </div>
              </div>
              <?php
                endwhile;
                endif;
              ?>  
             </div>

             <!-- sony block -->
                <?php
                  if( have_rows('company_repeater') ):
                      while ( have_rows('company_repeater') ) : the_row();?>
                      <div class="sony">
                        <img src="<?php the_sub_field('company_img'); ?>" alt="" class="sony__img">
                        <div class="sony-info">
                          <p class="sony-info__caption"><?php the_sub_field('company_title') ?></p>
                          <p class="sony-info__text"><?php the_sub_field('company_text') ?></p>
                        </div>
                      </div>
                      <?php endwhile;
                  endif;
                  ?>

    <?php get_footer() ?>
             
           </div>
      </div>
    </section>