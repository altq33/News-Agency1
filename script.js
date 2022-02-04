function oneton(n)
{
   if (n > 1)
   {
       oneton(n - 1);
   }
   console.log(n)
}
oneton(10)