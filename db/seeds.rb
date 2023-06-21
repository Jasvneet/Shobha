require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)




    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@user.io', 
      password: 'password',
      firstname: 'Demo-lition', 
      lastname: 'test'
      
    )
    User.create!(
      email: 'demo2@user.io', 
      password: 'password',
      firstname: 'Demo2', 
      lastname: 'test'
     
    )


   p1 = Product.create!({
    name: 'Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide',
    price: 48.0,
    size: 2.5,
    ingredients: 'Active: Avobenzone 3%, Octisalate 5%, Octocrylene 10% Inactive: Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/ Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid', 
    brand: 'Supergoop!',
    category: 'Skincare, Face Sunscreen',
    description: 
    'What it is: A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with an instant glow.

    Skincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles

    Formulation: Lotion

    Highlighted Ingredients:
    - Hyaluronic Acid and Vitamin B5: Help boost moisture in the skin, leaving it feeling soft and nurtured.
    - Sea Lavender: Helps provide powerful antioxidant protection while also supporting long-lasting hydration.
    - Cocoa Peptides: Help protect the skin from blue-light damage.

    Ingredient Callouts: This product is cruelty-free, and gluten-free.

    What Else You Need to Know: This multitasking primer with SPF gives skin an instant glow-up. Formulated with hyaluronic acid, niacinamide & vitamin B5 to hydrate & perfect, this broad spectrum tinted sunscreen creates an instant glow on its own or under makeup. Plus, it helps filter blue light from tech!'
 
})

  p1.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Supergoop-GlowScreen-Value-Size.webp'), filename: 'Supergoop-GlowScreen-Value-Size.webp')

   p2 = Product.create!({
    name: 'Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide',
    description: "What it is: A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with an instant glow.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion\n\nHighlighted Ingredients:\n\n- Hyaluronic Acid and Vitamin B5: Help boost moisture in the skin, leaving it feeling soft and nurtured.\n\n- Sea Lavender: Helps provide powerful antioxidant protection while also supporting long-lasting hydration.\n\n- Cocoa Peptides: Help protect the skin from blue-light damage.\n\nIngredient Callouts: This product is cruelty-free, and gluten-free.\n\nWhat Else You Need to Know: This multitasking primer with SPF gives skin an instant glow-up. Formulated with hyaluronic acid, niacinamide & vitamin B5 to hydrate & perfect, this broad spectrum tinted sunscreen creates an instant glow on its own or under makeup. Plus, it helps filter blue light from tech!",
    price: 38.00,
    size: 1.7,
    ingredients: 'Active: Avobenzone 3%, Octisalate 5%, Octocrylene 10% Inactive: Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/ Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid', 
    brand: 'Supergoop!',
    category: 'Skincare, Face Sunscreen'
})

p2.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Supergoop-Glowscreen-48.webp'), filename: 'Supergoop-Glowscreen-48.webp')
    

  p3 = Product.create!({
    name: 'Mini Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide',
    description: "What it is: A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with an instant glow.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion\n\nHighlighted Ingredients:\n\n- Hyaluronic Acid and Vitamin B5: Help boost moisture in the skin, leaving it feeling soft and nurtured.\n\n- Sea Lavender: Helps provide powerful antioxidant protection while also supporting long-lasting hydration.\n\n- Cocoa Peptides: Help protect the skin from blue-light damage.\n\nIngredient Callouts: This product is cruelty-free, and gluten-free.\n\nWhat Else You Need to Know: This multitasking primer with SPF gives skin an instant glow-up. Formulated with hyaluronic acid, niacinamide & vitamin B5 to hydrate & perfect, this broad spectrum tinted sunscreen creates an instant glow on its own or under makeup. Plus, it helps filter blue light from tech!",
    price: 22.00,
    size: 0.68,
    ingredients: 'Active: Avobenzone 3%, Octisalate 5%, Octocrylene 10% Inactive: Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/ Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid', 
    brand: 'Supergoop!',
    category: 'Skincare, Face Sunscreen'
})

p3.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/mini-glowscreen.webp'), filename: 'mini-glowscreen.webp')

 p4 = Product.create!({
    name: 'CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+',
    description: "What it is: The #1 SPF foundation in America* is a full-coverage foundation, hydrating & anti-aging serum, and SPF 50+ sunscreen in one—now in extended shades.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion\n\nHighlighted Ingredients:\n\n- Hyaluronic Acid: Hydrates and plumps while minimizing the look of fine lines & wrinkles.\n\n- -Niacinamide: Minimizes the look of discoloration & promotes even-toned, radiant skin.\n\n-Vitamin E: Helps soothe and nourish skin\n\nWhat Else You Need to Know: The full coverage, natural finish of a CC cream foundation meets hydration to color correct and camouflage skin concerns like acne scars, wrinkles, redness, dark circles under eyes, large pores & uneven skin tone. Made with skin-loving ingredients, it moisturizes for visibly healthy & smooth skin.",
    price: 47.00,
    size: 1.08,
    ingredients: 'Active Ingredients Titanium Dioxide 9% Zinc Oxide 6.3% Cosmetic Ingredients Water, Phenyl Trimethicone, Dimethicone, Butylene Glycol. Butylene Glycol Dicaprylate/Dicaprate, Orbignya Oleifera Seed Oil, Butyloctyl Salicylate, Cetyl Peg/Ppg-10/1 Dimethicone, Cyclopentasiloxane, Snail Secretion Filtrate, Aluminum Hydroxide, Magnesium Sulfate, Polyglyceryl-4 Isostearate, Stearic Acid, Cyclohexasiloxane, Dimethicone/Vinyl Dimethicone Crosspolymer, Hexyl Laurate, Calcium Stearate, Triethoxycaprylylsilane, Caprylyl Glycol, Ethyl Hexanediol, Ethylhexylglycerin, Limonene, Citrus Limon (Lemon) Peel Oil, Sorbitan Isostearate, Tocopheryl Acetate, Phenoxyethanol, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, 1,2-Hexanediol, Adenosine, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Aurantifolia (Lime) Oil, Pinus Sylvestris Leaf Oil, Linalool, Eucalyptus Globulus Leaf Oil, Glycerin, Citral, Niacinamide, Hyaluronic Acid, Colloidal Oatmeal, Hydrolyzed Collagen, Steareth-20, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Camellia Sinensis Leaf Extract, Olea Europaea (Olive) Leaf Extract, Chlorhexidine Digluconate, N-Hydroxysuccinimide, Silk Extract, Hydrolyzed Silk, Sodium Citrate, Potassium Sorbate, Palmitoyl Tripeptide-1, Chrysin, Palmitoyl Tetrapeptide-7, Citric Acid, Biotin May Contain Titanium Dioxide, Iron Oxides', 
    brand: 'IT Cosmetics',
    category: 'Skincare, Makeup, BB & CC Creams'
})

p4.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/IT-CC-SPF50-47.webp'), filename: 'IT-CC-SPF50-47.webp')
    
p5 = Product.create!({
    name: 'CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+',
    description: "What it is: The #1 SPF foundation in America* is a full-coverage foundation, hydrating & anti-aging serum, and SPF 50+ sunscreen in one—now in extended shades.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion\n\nHighlighted Ingredients:\n\n- Hyaluronic Acid: Hydrates and plumps while minimizing the look of fine lines & wrinkles.\n\n- -Niacinamide: Minimizes the look of discoloration & promotes even-toned, radiant skin.\n\n-Vitamin E: Helps soothe and nourish skin\n\nWhat Else You Need to Know: The full coverage, natural finish of a CC cream foundation meets hydration to color correct and camouflage skin concerns like acne scars, wrinkles, redness, dark circles under eyes, large pores & uneven skin tone. Made with skin-loving ingredients, it moisturizes for visibly healthy & smooth skin.",
    price: 21.00,
    size: 0.4,
    ingredients: 'Active Ingredients Titanium Dioxide 9% Zinc Oxide 6.3% Cosmetic Ingredients Water, Phenyl Trimethicone, Dimethicone, Butylene Glycol. Butylene Glycol Dicaprylate/Dicaprate, Orbignya Oleifera Seed Oil, Butyloctyl Salicylate, Cetyl Peg/Ppg-10/1 Dimethicone, Cyclopentasiloxane, Snail Secretion Filtrate, Aluminum Hydroxide, Magnesium Sulfate, Polyglyceryl-4 Isostearate, Stearic Acid, Cyclohexasiloxane, Dimethicone/Vinyl Dimethicone Crosspolymer, Hexyl Laurate, Calcium Stearate, Triethoxycaprylylsilane, Caprylyl Glycol, Ethyl Hexanediol, Ethylhexylglycerin, Limonene, Citrus Limon (Lemon) Peel Oil, Sorbitan Isostearate, Tocopheryl Acetate, Phenoxyethanol, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, 1,2-Hexanediol, Adenosine, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Aurantifolia (Lime) Oil, Pinus Sylvestris Leaf Oil, Linalool, Eucalyptus Globulus Leaf Oil, Glycerin, Citral, Niacinamide, Hyaluronic Acid, Colloidal Oatmeal, Hydrolyzed Collagen, Steareth-20, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Camellia Sinensis Leaf Extract, Olea Europaea (Olive) Leaf Extract, Chlorhexidine Digluconate, N-Hydroxysuccinimide, Silk Extract, Hydrolyzed Silk, Sodium Citrate, Potassium Sorbate, Palmitoyl Tripeptide-1, Chrysin, Palmitoyl Tetrapeptide-7, Citric Acid, Biotin May Contain Titanium Dioxide, Iron Oxides', 
    brand: 'IT Cosmetics',
    category: 'Skincare, Makeup, BB & CC Creams'
})

p5.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/mini-IT-CC-SPF50-21.webp'), filename: 'mini-IT-CC-SPF50-21.webp')


p6 = Product.create!({
    name: 'Gloss Bomb Universal Lip Luminizer',
    description: "What it is: A lip gloss that delivers explosive shine in three universal shades handpicked by Rihanna herself.\n\nHighlighted Ingredients:\n\n- Shea Butter: Hydrates and nourishes lips.\n\n- Vitamin E: Helps soothe and nourish skin.\n\nIngredient Callouts: Free of parabens and phthalates. This product is also cruelty-free.\n\nWhat Else You Need to Know: Gloss Bomb Universal Lip Luminizer is the ultimate finishing touch to any look. The non-sticky formula is super shiny and has an addictive peach-vanilla scent. Plus, it's enriched with skin-loving ingredients to make your lips look smooth, plump, and kissable. “I made it because I wanted the girls to get kissed more.”—Rihanna, Brand Founder",
    price: 21.00,
    size: 0.3,
    ingredients: 'Polybutene, Octyldodecanol, Bis-Diglyceryl Polyacyladipate-2, Tricaprylin, Cera Microcristallina/Microcrystalline Wax/Cire Microcristalline, Polyethylene, Silica Dimethyl Silylate, Vp/Eicosene Copolymer, Vp/Hexadecene Copolymer, Butyrospermum Parkii (Shea) Butter, Mica, Sorbitan Oleate, Silica, Octyldodecyl Neopentanoate, Ethylhexyl Palmitate, Caprylyl Glycol, Butyrospermum Parkii (Shea) Butter Unsaponifiables, Aroma/Flavor, Parfum/Fragrance, Tribehenin, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Sorbitan Isostearate, Tocopherol, Tocopheryl Acetate, Synthetic Fluorphlogopite, Tetrahexyldecyl Ascorbate, Lactic Acid, Calcium Sodium Borosilicate, Calcium Aluminum Borosilicate, Polyethylene Terephthalate, Palmitoyl Tripeptide-1, Acrylates Copolymer, Tin Oxide. May Contain/Peut Contenir (+/-): Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491), Benzyl Benzoate.',
    brand: 'Fenty Beauty by Rihanna',
    category: 'Makeup, Lip Gloss'
})

p6.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Fenty-Gloss-Bomb-Universal-21.webp'), filename: 'Fenty-Gloss-Bomb-Universal-21.webp')

# Product.create!( 
#   name: 'ShineOn Lip Jelly Non-Sticky Gloss', 
#   description: 'What it is: A non-sticky, moisturizing gloss for soft, shiny lips.\n\nHighlighted Ingredients:\n\n- Apricot Kernel Oil: Nurtures and soothes lips.\n\n- Raspberry Seed Oil: Protects lips against damage from free radicals and environmental aggressors.\n\n- Rosehip Oil: Contains vitamins A and E while promoting cell repair and regeneration.\n\nIngredient Callouts: This product is vegan, cruelty-free, and gluten-free.\n\nWhat Else You Need to Know: ShineOn Lip Jelly is a lip gloss that has the shine of a gloss, the comfort of a balm, and a touch of juicy translucent color. It uses a unique blend of five nurturing oils to soothe and protect lips from drying and peeling. Plus, it has an addictive apricot-vanilla scent. Choose from six juicy shades inspired by some of our favorite colors and the meanings behind them.', 
#   price: 16.00, 
#   size: 0.13, 
#   ingredients: 'Polybutene, Hydrogenated Polyisobutene, Hydrogenated Polybutene, Prunus Armeniaca (Apricot) Kernel Oil, Ethylene/Propylene/Styrene Copolymer, Octyldodecanol, Silica Dimethyl Silylate, Ricinus Communis (Castor) Seed Oil, Persea Gratissima (Avocado) Oil, Rosa Canina Seed Oil, Rubus Idaeus (Raspberry) Seed Oil, Oryza Sativa (Rice) Bran Extract, Helianthus Annuus (Sunflower) Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Butylene/Ehtylene/Styrene Copolymer, Aroma/Flavor, Caprylyl Glycol, Ethylhexylglycerin, Tocopherol, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, MAY CONTAIN (+/-): Iron Oxides (CI 77492), Iron Oxides (CI 77491), Iron Oxides (CI 77499), Titanium Dioxide (CI 77891), Red 7 Lake (CI 15850).',
#   brand: `Tower 28 Beauty`, 
#   category: `Makeup, Lip Gloss'

# )



    
  

  
  puts "Done!"
