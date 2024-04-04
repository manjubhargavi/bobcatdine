export const navigation = {
    categories: [
      {
        id: 'Food',
        name: 'Food',
        featured: [
          {
            name: 'Pizzas',
            href: '/',
            imageSrc: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/pizzas_selector_1600x900.jpg?rev=6a81e278-07fc-4e95-9ba1-361063f35adf&hash=B8B1264AB6FC3F4B1AE140EB390208CD',
            imageAlt: 'Pizzas',
          },
          {
            name: 'Burgers',
            href: '/',
            imageSrc: 'https://th.bing.com/th/id/R.a46c53e48e44f5b123b186f20c14e8f1?rik=c6ng%2fo3HfNbfhA&pid=ImgRaw&r=0',
            imageAlt: 'Burgers',
          },
        ],
        sections: [
          {
            id: 'maincourse',
            name: 'maincourse',
            items: [
              { name: 'pizza', id:"pizza", href: `{maincourse/food/pizza}` },
              { name: 'burger', id:"burger", href: '#' },
              { name: 'pasta', id: 'pasta',href: `{women/clothing/tops}` },
              /* { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'T-Shirts', id: 't-shirts' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Kurtas', id: 'kurtas' }, */
            ],
          },
          
          
        ],
      },
      {
        id: 'Drinks',
        name: 'Drinks',
        featured: [
          {
            name: 'Watermelon detox',
            id: '#',
            imageSrc: 'https://www.godairyfree.org/wp-content/uploads/2015/03/Watermelon-Detox-Smoothies-Feature.jpg',
            imageAlt: 'Watermelon detox.',
          },
          {
            name: 'Lemon detox',
            id: '#',
            imageSrc: 'https://easyweeknightrecipes.com/wp-content/uploads/2023/01/lemon-cucumber-detox-3.jpg',
            imageAlt:
              'Lemon detox.',
          },
        ],
        sections: [
          {
            id: 'Cold & Hot beverages',
            name: 'Cold & Hot beverages',
            items: [
              { name: 'Cold beverages', id: 'Cold beverages' },
              { name: 'Hot beverages', id: 'Hot beverages' },  
            ],
          },
        ],
      },
      {
        id: 'Snacks',
        name: 'Snacks',
        featured: [
          {
            name: 'Mixed Scoop Cone',
            id: '#',
            imageSrc: 'https://blog.mystart.com/wp-content/uploads/OGL_Ice_Cream_5defe7ecc1887f3962e63f53.jpeg',
            imageAlt: 'Mixed Scoop Cone',
          },
          {
            name: 'Mixed Scoop bowl',
            id: '#',
            imageSrc: 'https://previews.123rf.com/images/imagestore/imagestore1606/imagestore160601536/59674049-mixed-ice-cream-scoops-in-bowl.jpg',
            imageAlt:
              'Mixed Scoop bowl',
          },
        ],
        sections: [
          {
            id: 'Kids',
            name: 'Kids',
            items: [
              { name: 'Fries', id: 'Fries' },
              { name: 'Ice Cream', id: 'Ice Cream' },  
            ],
          },
        ],
      },
    ],
  }