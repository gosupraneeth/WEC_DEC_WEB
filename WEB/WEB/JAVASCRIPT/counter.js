let counter=0;
		function count()
		{
			counter++;
			const heading=document.querySelector('h1');
			heading.innerHTML=counter;
			if(counter%10===0)
			{
				alert(`The count reached ${counter}`);
			}
			/*if(counter%2===1)
				document.querySelector('h1').innerHTML='Good Bye!';
			else
			{
				document.querySelector('h1').innerHTML='Hello';
			}*/
		}

		document.addEventListener('DOMContentLoaded',function(){
			document.querySelector('button').onclick=count;
		});