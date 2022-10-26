<template>
	<v-container class="bg-aqua">
		<HeaderBackground v-bind:heading="start">
			<p class="text-h6 mt-16 pt-16"> Cięcie materiału metodą Abrasive WaterJet(AWJ). </p>
			<p class="text-h6 pa-12"
				>Cięcie metalu, płytek, granitu, drewna, tworzyw sztucznych o grubości
				nie przekraczającej 200mm.</p
			></HeaderBackground
		></v-container
	>
	<v-container fluid class="pa-0"><CarouselText /></v-container>
  <v-container fluid class="pa-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique architecto dolores illum hic id doloribus maxime est, error, at harum? Unde nihil est culpa, aliquam voluptatum vel similique corrupti laboriosam consequatur minus quia, architecto cupiditate incidunt nobis beatae fuga error praesentium iste officiis vitae pariatur. Itaque, quia earum dolore dicta molestias hic nesciunt quis saepe illo porro illum incidunt ratione! Eos delectus provident atque recusandae amet magnam nam quos deserunt asperiores ipsa minima mollitia ipsam magni nemo iste praesentium, facere voluptatum, natus eveniet consequuntur animi autem omnis dolore a! Voluptates consectetur aperiam qui deserunt alias autem, libero facere temporibus, hic iure accusantium, dolore dignissimos ab corrupti. Placeat tenetur at corporis dolorem commodi ab suscipit ea amet dolores atque recusandae ullam asperiores reiciendis, vel sunt voluptas culpa quae error eligendi pariatur nisi quos, labore sit. Quod quo recusandae vel pariatur itaque illo beatae laudantium architecto distinctio, dolorum eos modi unde possimus dolores dolore aliquam delectus excepturi molestiae, quisquam sit. Nostrum ipsam est praesentium unde exercitationem veritatis possimus alias, iste quasi quod blanditiis perferendis? Culpa harum pariatur quam dolor, atque error quo maxime? Veritatis optio dolorum rerum aliquid dolorem nesciunt ratione quia fuga delectus accusamus, aut corporis velit voluptates reiciendis enim laboriosam hic minus. Cumque magni, commodi deleniti, corporis inventore minima repellat soluta rerum, autem velit perferendis magnam alias nam provident quaerat consequatur nihil! Natus pariatur labore aspernatur modi repellat sapiente vero doloremque accusamus, aperiam ad molestiae, quia aliquam numquam id nostrum voluptatem explicabo, sit soluta optio repudiandae? Tempora perspiciatis voluptates id eligendi aperiam eos aut quidem placeat impedit. Explicabo iste beatae modi autem inventore aliquid laborum, doloribus dicta, labore delectus vitae accusamus dolor. Doloribus in, nostrum commodi officiis ratione debitis aut deleniti aperiam iste mollitia ab unde eaque recusandae rem facere, nobis ducimus quod adipisci dolores impedit distinctio voluptates! Tempore perspiciatis minima quam sint officiis magnam numquam veniam accusamus dolore expedita. Dicta iusto velit saepe, tempore ea soluta consequatur illo corporis aspernatur labore ipsa reiciendis magnam expedita sed sapiente beatae? Optio voluptatibus quidem et. Iste reprehenderit quibusdam ipsam tenetur nulla similique velit optio natus eum, quae neque sit distinctio at dolores fuga laudantium doloribus numquam ut ad. Incidunt eveniet totam facilis eligendi quaerat vel dicta qui dignissimos. Deleniti nobis, dignissimos eius incidunt eligendi dolor. Itaque commodi laborum incidunt odio ea repudiandae. Officia nulla ratione molestiae, facere non eius dolorum nemo illum repellat voluptatum magni aut corrupti. Maxime fugit, praesentium excepturi itaque quod, nostrum sequi ipsam odio quidem optio iste provident. Numquam earum aliquid deserunt veritatis a cumque optio, id mollitia quidem esse, voluptas iste. Animi saepe fuga ducimus sit nulla, quia dolorum non est, necessitatibus totam quasi voluptatem quidem praesentium, error ratione repellat hic. Porro nihil vitae animi accusantium aliquam! Quas possimus, officiis ab neque eligendi quasi dolores voluptatem ratione eius enim explicabo ex dolor autem quisquam asperiores similique eos. Voluptatem dolores libero rem beatae voluptatibus quo ratione eius ad earum aliquam tenetur, placeat ipsam non aliquid soluta fugiat rerum reiciendis autem delectus maxime? Doloribus asperiores cupiditate harum quae? Autem.</v-container>
</template>

<script setup>
// Components
import CarouselText from '../components/CarouselText.vue';
import HeaderBackground from '../components/HeaderBackground.vue';
const start = 'Profesjonalne cięcie wodą!';
</script>
<style lang="scss" scoped >
.background{

min-height:100vh;
h1{
  padding-bottom: 4em !important;
}
}
.v-container {
	padding: 0;
	margin: 0;
	max-width: 100%;
}
.bg-aqua {
	background-color: aqua;
}
</style>
