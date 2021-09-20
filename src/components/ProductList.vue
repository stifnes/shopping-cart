<template>
  <div>
    <ConfirmationModal :showModal="showModal" @productDeleted="deleteProducts"/>
    <Header @productDeleted="toggleModal" />
    <ul class="products">
      <li v-for="product in cartProducts" :key="product.id">
        <ProductCard :product="product" />
      </li>
    </ul>
    <div class="footer">
      <div class="form-input">
        <input
          type="text"
          v-model="title"
          required
          @keypress="showOptions = true"
          @keyup.enter="addProduct"
          placeholder="Enter the product name"
        />
        <div class="options" v-if="showOptions && title.length > 0">
          <ul class="options-list">
            <li
              v-for="option in filteredOptions"
              :key="option.id"
              @click="addOldProduct(option)"
              class="options-list-item"
            >
              {{ option.title }}
            </li>
          </ul>
        </div>
        <button type="submit" @click="addProduct" class="button-add">
          Add to List
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header.vue";
import ConfirmationModal from "@/components/ConfirmationModal.vue";

export default {
  components: {
    ProductCard,
    Header,
    ConfirmationModal
  },
  data() {
    return {
      title: "",
      showOptions: false,
      cartProducts: [],
      showModal: false,
      products: [
        {
          id: "a1",
          title: "Apfel Elstar aus Österreich",
          imageURL:
            "http://shopmap.wirecube.at/resources/73402840-975a-4f7c-9964-f865d4356d0c/images/apfel.jpeg",
          price: 2.49,
          strikePrice: null,
          description:
            "Klasse I\n\nElstar Äpfel von Da komm ich her! sind mittelfest und haben einen frischen, süß-säuerlichen Geschmack. Die Sorte gehört zu den beliebtesten Speiseäpfeln.\n\nQualität aus Österreich\neignet sich gut für Strudel oder zum Dörren",
        },
        {
          id: "a2",
          title: "Weißkraut aus Österreich",
          imageURL:
            "http://shopmap.wirecube.at/resources/73402840-975a-4f7c-9964-f865d4356d0c/images/weisskraut.jpeg",
          price: 0.99,
          strikePrice: 1.25,
          description:
            "Klasse I\n\n\nfester Kopf\nkeine fleckigen oder trockenen Außenblätter\nWeißkraut ist eine Variante des Kopfkohls\nvorwiegend in Herbst und Winter Saison",
        },
        {
          id: "a3",
          title: "Snack Radieschen aus Österreich",
          imageURL:
            "http://shopmap.wirecube.at/resources/73402840-975a-4f7c-9964-f865d4356d0c/images/radieschen.jpeg",
          price: 1.0,
          strikePrice: 1.49,
          description:
            "Klasse I\n\nHeute schon gesund gesnackt? Die Snack Radieschen zeichnen sich durch ihr unverkennbares Aroma aus und schmecken auch gut im frisch zubereiteten Salat.\n\nliefern wichtige Vitamine und Mineralstoffe",
        },
        {
          id: "a6",
          title: "Kartoffel, speckig",
          imageURL:
            "http://shopmap.wirecube.at/resources/73402840-975a-4f7c-9964-f865d4356d0c/images/kartoffel.jpg",
          price: 2.49,
          strikePrice: null,
          description:
            "Klasse I\n\nHeimisches Gemüse aus österreichischem Anbau: Die speckigen Erdäpfel von Da komm` ich her! lassen sich wunderbar zu Salat und köstlichen Beilagen verarbeiten.\n\naus der Region\nreich an Vitaminen und Mineralstoffen",
        },
        {
          id: "a4",
          title: "Erdbeeren aus Spanien",
          imageURL:
            "http://shopmap.wirecube.at/resources/73402840-975a-4f7c-9964-f865d4356d0c/images/erdbeeren.jpeg",
          price: 2.79,
          strikePrice: 2.99,
          description:
            "Klasse I\n\nsaftig-süß\nfeste, gleichmäßig gereifte Früchte\nideal für Obstsalate oder für den gesunden Snack zwischendurch",
        },
        {
          id: "a5",
          title: "Erdnüsse",
          imageURL:
            "http://shopmap.wirecube.at/resources/73402840-975a-4f7c-9964-f865d4356d0c/images/erdnuesse.jpeg",
          price: 1.59,
          strikePrice: null,
          description:
            "Klasse I\n\nOb als knackige Knabberei, Salatzutat, in warmen Gerichten oder Gebäck: SanLucar Erdnüsse bilden einen wertvollen Bestandteil für eine ausgewogene Ernährung.\n\ngeröstete Erdnüsse mit Schale\nideal als nahrhafter Snack oder Zutat in warmen und kalten Speisen\nreich an Eiweiß, Mineralien und Vitaminen",
        },
      ],
    };
  },
  mounted() {
    this.cartProducts = [...this.products];
  },
  computed: {
    filteredOptions() {
      return this.products.filter((product) => {
        return product.title.toLowerCase().includes(this.title.toLowerCase());
      });
    },
  },
  methods: {
    addProduct() {
      if (this.title.length > 0) {
        this.cartProducts.push({
          title: this.title,
          id: this.cartProducts.length + Math.random(),
        });
        this.title = "";
      }
    },
    addOldProduct(obj) {
      this.cartProducts.push({
        title: obj.title,
        imageURL: obj.imageURL,
        id: this.cartProducts.length + Math.random(),
      });
      this.title = "";
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    deleteProducts() {
      this.cartProducts = this.cartProducts.filter(
        (product) => !product.selected
      );
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    margin-bottom: 1rem;
    transition: all 0.3s;
  }
  &.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 16px;
    padding: 3.5rem 0;
  }
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 1rem 2rem;
  box-sizing: border-box;
  .form-input {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    input {
      border: none;
      border-bottom: 1px solid #ccc;
      padding: 8px;
      &:focus {
        outline: none;
      }
    }
    button {
      background-color: rgb(83, 57, 126);
      border: none;
      border-radius: 8px;
      padding: 0.5rem 1rem;
      color: #fff;
      margin-left: 16px;
    }
    @media screen and (max-width: 550px) {
      justify-content: center;
    }
  }
  .options {
    position: absolute;
    bottom: 65px;
    width: 100%;
    background-color: #fff;
    ul {
      li {
        padding: 1rem;
        border-bottom: 1px solid #ccc;
        margin: 0;
        cursor: pointer;
        &:hover {
          background-color: rgb(176, 184, 253);
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
