import CatalogueBeansproutsImage from "@/assets/Catalogue_Beansprouts.png";
import CatalogueSoybeanSproutImage from "@/assets/Catalogue_SoybeanSprouts.png";
import CatalogueBroccoliSproutImage from "@/assets/Catalogue_BroccoliSprouts-04.png";
import CatalogueRadishDaikonSproutImage from "@/assets/Catalogue_RadishDaikonSprouts-08.png";
import CatalogueRadishRedVulcanoSproutImage from "@/assets/Catalogue_RadishRedVulcanoSprouts-05.png";
import CatalogueCrimsonCloverSproutImage from "@/assets/Catalogue_CrimsonCloverSprouts-07.png";
import CatalogueAlfalfaSproutImage from "@/assets/Catalogue_AlfalfaSprouts-06.png";
import CatalogueDriedBeanSproutHusk from "@/assets/Catalogue_BeansproutHusks.png";
import OtherProductImage from "@/assets/leaf.png";

export const freshProducts = [
  { name: "Beansprout", image: CatalogueBeansproutsImage },
  { name: "Soybean Sprout", image: CatalogueSoybeanSproutImage },
  { name: "Broccoli Sprout", image: CatalogueBroccoliSproutImage },
  { name: "Radish Daikon Sprout", image: CatalogueRadishDaikonSproutImage },
  { name: "Radish Red Vulcano Sprout", image: CatalogueRadishRedVulcanoSproutImage },
  { name: "Crimson Clover Sprout", image: CatalogueCrimsonCloverSproutImage },
  { name: "Alfalfa Sprout", image: CatalogueAlfalfaSproutImage },
];

export const upcycledProducts = [
  { name: "Dried Beansprout Husk", image: CatalogueDriedBeanSproutHusk, weight: "" },
];

export const growProducts = [
  { name: "Mason Jar Sprouting Kit", image: OtherProductImage },
  { name: "Organic Broccoli Sprouting Seeds", image: OtherProductImage },
  { name: "Organic Alfalfa Sprouting Seeds", image: OtherProductImage },
  { name: "Organic Crimson Clover Sprouting Seeds", image: OtherProductImage },
  { name: "Organic Radish (Daikon Minowase) Sprouting Seeds", image: OtherProductImage },
  { name: "Organic Radish (Red Vulcano) Sprouting Seeds", image: OtherProductImage },
];

export const allProducts = [
  ...freshProducts,
  ...upcycledProducts,
  ...growProducts,
];