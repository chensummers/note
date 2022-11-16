<script>
	import ContactCard from './ContactCard.svelte';
</script>

<!-- 命名slots -->
<ContactCard>
	<span slot="name">
		P. Sherman
	</span>

	<span slot="address">
		42 Wallaby Way<br>
		Sydney
	</span>
	<span slot="email">
		123@qq.com
	</span>
</ContactCard>