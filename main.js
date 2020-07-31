window.onscroll = () =>
{
	var toTop = document.getElementById('to-top');
	
	if (toTop === null)
		return;
	
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
	{
		toTop.style.display = 'initial';
	}
	else
	{
		toTop.style.display = 'none';
	}
}

function thumbnailAnimation(id, count)
{
	var currentImg = 0;
	var el = document.getElementById(id);
	
	changeImage();
	
	var timer = setInterval(changeImage, 1000);
	
	el.addEventListener(
		'mouseleave',
		function()
		{
			clearInterval(timer);
			el.style.backgroundImage = 'url("./Apps/' + id + '_thumbnail_0.jpg' + '")';
		},
		false
	);
	
	function changeImage()
	{
		if (currentImg === count - 1)
		{
			currentImg = -1;
		}
		
		el.style.backgroundImage = 'url("./Apps/' + id + '_thumbnail_' + (++currentImg).toString() + '.jpg' + '")';
	}
}

function showModal(id, count)
{
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	
	document.getElementById('modal').style.display = 'block';
	document.getElementById('modal-description').innerHTML = document.querySelector('#' + id + ' + .app-info .app-description').innerHTML;
	
	var modalPhoto = document.getElementById('modal-photo');
	var modalPage = document.getElementById('modal-page');
	
	modalPhoto.style.backgroundImage = 'url("./Apps/' + id + '_0.jpg' + '")';
	modalPage.innerHTML = '1 / ' + count.toString();
	
	var currentImg = 0;
	
	document.getElementById('next').addEventListener(
		'click',
		function()
		{
			if (currentImg === count - 1)
			{
				currentImg = -1;
			}
			modalPhoto.style.backgroundImage = 'url("./Apps/' + id + '_' + (++currentImg).toString() + '.jpg' + '")';
			modalPage.innerHTML = (currentImg + 1).toString() + ' / ' + count.toString();
		},
		false
	);
	
	document.getElementById('prev').addEventListener(
		'click',
		function()
		{
			if (currentImg === 0)
			{
				currentImg = count;
			}
			modalPhoto.style.backgroundImage = 'url("./Apps/' + id + '_' + (--currentImg).toString() + '.jpg' + '")';
			modalPage.innerHTML = (currentImg + 1).toString() + ' / ' + count.toString();
		},
		false
	);
}

function closeModal()
{
	document.getElementsByTagName('body')[0].style.overflow = 'initial';
	document.getElementById('modal').style.display = 'none';
}

function readMoreLess(id)
{
	var readMoreLessButton = document.querySelector('#' + id + ' + .app-info .read-more-less');
	var readMoreLessText = document.querySelector('#' + id + ' + .app-info .read-more-less p');
	
	if (readMoreLessText.innerHTML === 'Read more')
	{
		readMoreLessText.innerHTML = 'Read less';
		
		readMoreLessButton.style.position = 'initial';
		readMoreLessButton.style.width = '100%';
		
		document.querySelector('#' + id + ' + .app-info').style.maxHeight = '10em';
	}
	else
	{
		readMoreLessText.innerHTML = 'Read more';
		
		readMoreLessButton.style.position = 'absolute';
		readMoreLessButton.style.width = 'initial';
		
		document.querySelector('#' + id + ' + .app-info').style.maxHeight = '3em';
	}
}

function highlight(className)
{
	var show, hide;
	
	if (className === '')
	{
		show = document.querySelectorAll('.app');
	}
	else
	{
		hide = document.querySelectorAll('.app:not(.' + className + ')');
		show = document.querySelectorAll('.' + className);
	}
	
	if (show.length === 0)
		return;
		
	for (var i = 0; i < show.length; i++)
	{
		show[i].style.display = 'initial';
	}
	for (var i = 0; i < hide.length; i++)
	{
		hide[i].style.display = 'none';
	}
}