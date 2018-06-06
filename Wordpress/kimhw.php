<!-- #1: Triangle PHP Exercise

Write a loop that will echo the following triangle to the page:

#
##
###
####
#####
######
#######

As you can see, the triangle should have seven rows, and the bottom row should be seven #s long.

While you could easily just do this by echoing each line one by one, instead, do it with a loop. There should be only one echo command in your code, and it should only echo one row. Use a loop to create new rows, and to increase the length of each one. (Hint: it might be worth looking up PHP string concatenation operators.) -->

     <?php 

        $createTriange = '#';
     
     $i++;
    

    for ($i = 0; $i < 7; $i++){ ?>
        <li>

         <?php echo $rainbow_colors[$i]; ?>
         
        </li>

   <?php } ?> 