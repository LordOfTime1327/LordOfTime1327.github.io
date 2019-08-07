<?php $path = get_template_directory_uri(); ?>

<footer class="footer">
                <div id="contact" class="footer__contact">
                  <div class="contact">
                    <span class="contact__caption">contact</span>
                    <address class="contact__item"><?php the_field("place") ?></address>
                    <time class="contact__item"><?php the_field("date") ?></time>
                    
                    <?php if( have_rows('contacts_repeater') ): ?>
                      <?php while( have_rows('contacts_repeater') ): the_row(); ?>
                          <?php if( have_rows('email_repeater') ): ?>
                          <?php while( have_rows('email_repeater') ): the_row();
                            $email = get_sub_field('email');
                          ?>
                            <a href="mailto: <?php echo $email ?>" class="contact__item contact__item_email"><?php echo $email ?></a>
                          <?php endwhile; ?>
                          <?php endif; ?>

                          <?php if( have_rows('phone_repeater') ): ?>
                          <?php while( have_rows('phone_repeater') ): the_row();
                            $phone = get_sub_field('phone'); 
                          ?>
                            <a href="mailto: <?php echo $phone ?>" class="contact__item contact__item_tel"><?php echo $phone ?></a>
                          <?php endwhile; ?>
                          <?php endif; ?>
                      <?php endwhile; ?>
                    <?php endif; ?>

                   </div>
         
                  <div class="follow">
                    <span class="follow__caption">follow</span>
                    <div class="follow__box">
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
        
                  <div class="logo logo_footer">
                    <embed src="<?php echo $path?>/i/logo.svg" type="">
                  </div>
                </div>
        
                <div class="footer__formBox">

                  <a name="registration"></a>

                  <p class="footer__formCaption">Get in touch</p>

                  <form class="footerForm" action="sendEmail.php"  method="post">
                    <!-- <input name="name" type="text" id="formName" class="footerForm__item footerForm__item_name" placeholder="Your Name" required autocomplete="off">
                    <input name="email" type="email" id="formEmail" class="footerForm__item footerForm__item_email" placeholder="Your e-mail" required autocomplete="nope">
                    <input name="message" type="text" class="footerForm__item footerForm__item_msg" placeholder="Your message" autocomplete="off">
                    <button type="submit" class="footerForm__submit">Send</button> -->
                    <?php echo do_shortcode('[contact-form-7 id="247" title="footer form"]');?>
                  </form>
                </div>
               </footer>