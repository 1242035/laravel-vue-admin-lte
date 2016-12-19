@if (count($errors) > 0)
	<div class="flash-error">
  		<button type="button" class="flash-close" aria-hidden="true">&times;</button>
		<p>
			<strong>Whoops!</strong> There were some problems with your input.<br>
		</p>

		<ul>
			@foreach ($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	</div>
@endif

@section('extras')
<script>
( function($) {
	$('body').delegate('.flash-close','click touchstart', function(e){
		e.preventDefault();
		$('.flash-close').parent().hide();
	} );
})(jQuery);
</script>
@endsection
