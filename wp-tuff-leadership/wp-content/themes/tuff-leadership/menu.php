<?php $path = get_template_directory_uri(); ?>

<div class="wrapper wrapper_white menuPage" id="menu">
      <div class="container containerRel">

            <div class="close" id='close'>
              <img src="<?php echo $path?>/i/close.png" alt="" class="close__img">
            </div>


        <div class="menuBlock">  
          
          <div class="menuBlock__item">
          
            <div class="menuBlock__caption">menu</div>
              <menu class="menuBox">
                <menuitem><a href="#top" class="menuBox__link">Home</a></menuitem>
                <menuitem><a href="#approach" class="menuBox__link">Approach</a></menuitem>
                <menuitem><a href="#coach" class="menuBox__link">The coaches</a></menuitem>
                <menuitem><a href="#testimonials" class="menuBox__link">Testimonials</a></menuitem>
                <menuitem><a href="#contact" class="menuBox__link menuBox__link_last">Contact</a></menuitem>
              </menu>
            </div>

          <div class="details">
            <div class="menuContact">
                <span class="menuContact__caption">Details</span>
                <address class="menuContact__item"><?php the_field("place") ?></address>
                <time class="menuContact__item"><?php the_field("date") ?></time>
                <?php if( have_rows('contacts_repeater') ): ?>
                      <?php while( have_rows('contacts_repeater') ): the_row(); ?>
                          <?php if( have_rows('email_repeater') ): ?>
                          <?php while( have_rows('email_repeater') ): the_row();
                            $email = get_sub_field('email');
                          ?>
                            <a href="mailto: <?php echo $email ?>" class="menuContact__item menuContact__item_email"><?php echo $email ?></a>
                          <?php endwhile; ?>
                          <?php endif; ?>

                          <?php if( have_rows('phone_repeater') ): ?>
                          <?php while( have_rows('phone_repeater') ): the_row();
                            $phone = get_sub_field('phone'); 
                          ?>
                            <a href="mailto: <?php echo $phone ?>" class="menuContact__item menuContact__item_tel"><?php echo $phone ?></a>
                          <?php endwhile; ?>
                          <?php endif; ?>
                      <?php endwhile; ?>
                    <?php endif; ?>
              </div>
    
              <div class="menuFollow">
                <span class="menuFollow__caption">follow</span>
    
                <div class="menuFollow__box">
                <?php
                  if( have_rows('icon_repeater') ):
                    while ( have_rows('icon_repeater') ) : the_row();?>
                      <a href="<?php the_sub_field('soc_link'); ?>" target="_blank" class="follow__item">
                        <img src="<?php the_sub_field('soc_img'); ?>" alt="" class="follow__img">  
                      </a>
                <?php 
                endwhile;
                endif;
                ?>
                </div>
              </div>
         </div>
        </div>
      </div>
    </div>

    <menu class="menu" id="menuBtn">
        <menuitem class="menu__text">me</menuitem>
        <menuitem class="menu__text">nu</menuitem>
    </menu>

    <?php wp_footer() ?>
    
    </body>
  </html>