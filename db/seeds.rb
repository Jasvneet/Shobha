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
    price: 48.00,
    size: 2.5,
    ingredients: 
    'Active: Avobenzone 3%, Octisalate 5%, Octocrylene 10% Inactive: Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/ Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid', 
    brand: 'Supergoop!',
    category: 'Skincare',
    description: 
    'A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with an instant glow.
    Skincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles.
    Formulation: Lotion.',
    callouts: 
    'This product is cruelty-free, and gluten-free.',
    how_to_use: 
    '-Apply generously and evenly as the last step in your skincare routine, before your favorite foundation, and after your moisturizer.
    -You can also wear this on its own for a no-makeup makeup glow.',
    other_info: 
    'This multitasking primer with SPF gives skin an instant glow-up. Formulated with hyaluronic acid, niacinamide & vitamin B5 to hydrate & perfect, this broad spectrum tinted sunscreen creates an instant glow on its own or under makeup. Plus, it helps filter blue light from tech!'
 
})

  p1.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Supergoop-GlowScreen-Value-Size.webp'), filename: 'Supergoop-GlowScreen-Value-Size.webp')

   p2 = Product.create!({
    name: 'Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide',
    description:
    'A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with an instant glow.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion.',
    callouts: 'This product is cruelty-free, and gluten-free.',
    other_info: 'This multitasking primer with SPF gives skin an instant glow-up. Formulated with hyaluronic acid, niacinamide & vitamin B5 to hydrate & perfect, this broad spectrum tinted sunscreen creates an instant glow on its own or under makeup. Plus, it helps filter blue light from tech!',
    price: 38.00,
    size: 1.7,
    ingredients: 'Active: Avobenzone 3%, Octisalate 5%, Octocrylene 10% Inactive: Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/ Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid', 
    brand: 'Supergoop!',
    category: 'Skincare',
    how_to_use: 
    '-Apply generously and evenly as the last step in your skincare routine, before your favorite foundation, and after your moisturizer.
    -You can also wear this on its own for a no-makeup makeup glow.'
})

p2.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Supergoop-Glowscreen-48.webp'), filename: 'Supergoop-Glowscreen-48.webp')
    

  p3 = Product.create!({
    name: 'Mini Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide',
    description:
    'A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with an instant glow.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion.',
    callouts: 'This product is cruelty-free, and gluten-free.',
    other_info: 'This multitasking primer with SPF gives skin an instant glow-up. Formulated with hyaluronic acid, niacinamide & vitamin B5 to hydrate & perfect, this broad spectrum tinted sunscreen creates an instant glow on its own or under makeup. Plus, it helps filter blue light from tech!',
    price: 22.00,
    size: 0.68,
    ingredients: 'Active: Avobenzone 3%, Octisalate 5%, Octocrylene 10% Inactive: Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/ Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid', 
    brand: 'Supergoop!',
    category: 'Mini',
    how_to_use: 
    '-Apply generously and evenly as the last step in your skincare routine, before your favorite foundation, and after your moisturizer.
    -You can also wear this on its own for a no-makeup makeup glow.'
})

p3.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/mini-glowscreen.webp'), filename: 'mini-glowscreen.webp')

 p4 = Product.create!({
    name: 'CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+',
    description: "The #1 SPF foundation in America* is a full-coverage foundation, hydrating & anti-aging serum, and SPF 50+ sunscreen in one—now in extended shades.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion.",
    callouts: 'Free of sulfates parabens and phthalates.',
    other_info: 'The full coverage, natural finish of a CC cream foundation meets hydration to color correct and camouflage skin concerns like acne scars, wrinkles, redness, dark circles under eyes, large pores & uneven skin tone. Made with skin-loving ingredients, it moisturizes for visibly healthy & smooth skin.',
    price: 47.00,
    size: 1.08,
    ingredients: 'Active Ingredients Titanium Dioxide 9% Zinc Oxide 6.3% Cosmetic Ingredients Water, Phenyl Trimethicone, Dimethicone, Butylene Glycol. Butylene Glycol Dicaprylate/Dicaprate, Orbignya Oleifera Seed Oil, Butyloctyl Salicylate, Cetyl Peg/Ppg-10/1 Dimethicone, Cyclopentasiloxane, Snail Secretion Filtrate, Aluminum Hydroxide, Magnesium Sulfate, Polyglyceryl-4 Isostearate, Stearic Acid, Cyclohexasiloxane, Dimethicone/Vinyl Dimethicone Crosspolymer, Hexyl Laurate, Calcium Stearate, Triethoxycaprylylsilane, Caprylyl Glycol, Ethyl Hexanediol, Ethylhexylglycerin, Limonene, Citrus Limon (Lemon) Peel Oil, Sorbitan Isostearate, Tocopheryl Acetate, Phenoxyethanol, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, 1,2-Hexanediol, Adenosine, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Aurantifolia (Lime) Oil, Pinus Sylvestris Leaf Oil, Linalool, Eucalyptus Globulus Leaf Oil, Glycerin, Citral, Niacinamide, Hyaluronic Acid, Colloidal Oatmeal, Hydrolyzed Collagen, Steareth-20, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Camellia Sinensis Leaf Extract, Olea Europaea (Olive) Leaf Extract, Chlorhexidine Digluconate, N-Hydroxysuccinimide, Silk Extract, Hydrolyzed Silk, Sodium Citrate, Potassium Sorbate, Palmitoyl Tripeptide-1, Chrysin, Palmitoyl Tetrapeptide-7, Citric Acid, Biotin May Contain Titanium Dioxide, Iron Oxides', 
    brand: 'IT Cosmetics',
    category: 'Skincare',
    how_to_use: 
    "- Apply 1-2 pumps of CC+ Cream SPF 50+ to clean skin.

    - For best results, use a foundation makeup brush IT Cosmetics Heavenly Luxe Complexion Perfection Brush #7 (sold separately) to buff and blend a smooth, even layer of foundation onto your face, neck and décolleté.
    
    - To set, use Bye Bye Pores Translucent Pressed Setting Powder (sold separately) and finish it off with It's Your Skin But Better Setting Spray for a flawless finish that lasts."
})

p4.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/IT-CC-SPF50-47.webp'), filename: 'IT-CC-SPF50-47.webp')
    
p5 = Product.create!({
    name: 'CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+',
    description: 
    "The #1 SPF foundation in America* is a full-coverage foundation, hydrating & anti-aging serum, and SPF 50+ sunscreen in one—now in extended shades.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion.",
    callouts: 'Free of sulfates parabens and phthalates.',
    other_info: "The full coverage, natural finish of a CC cream foundation meets hydration to color correct and camouflage skin concerns like acne scars, wrinkles, redness, dark circles under eyes, large pores & uneven skin tone. Made with skin-loving ingredients, it moisturizes for visibly healthy & smooth skin.",
    price: 21.00,
    size: 0.4,
    ingredients: 'Active Ingredients Titanium Dioxide 9% Zinc Oxide 6.3% Cosmetic Ingredients Water, Phenyl Trimethicone, Dimethicone, Butylene Glycol. Butylene Glycol Dicaprylate/Dicaprate, Orbignya Oleifera Seed Oil, Butyloctyl Salicylate, Cetyl Peg/Ppg-10/1 Dimethicone, Cyclopentasiloxane, Snail Secretion Filtrate, Aluminum Hydroxide, Magnesium Sulfate, Polyglyceryl-4 Isostearate, Stearic Acid, Cyclohexasiloxane, Dimethicone/Vinyl Dimethicone Crosspolymer, Hexyl Laurate, Calcium Stearate, Triethoxycaprylylsilane, Caprylyl Glycol, Ethyl Hexanediol, Ethylhexylglycerin, Limonene, Citrus Limon (Lemon) Peel Oil, Sorbitan Isostearate, Tocopheryl Acetate, Phenoxyethanol, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, 1,2-Hexanediol, Adenosine, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Aurantifolia (Lime) Oil, Pinus Sylvestris Leaf Oil, Linalool, Eucalyptus Globulus Leaf Oil, Glycerin, Citral, Niacinamide, Hyaluronic Acid, Colloidal Oatmeal, Hydrolyzed Collagen, Steareth-20, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Camellia Sinensis Leaf Extract, Olea Europaea (Olive) Leaf Extract, Chlorhexidine Digluconate, N-Hydroxysuccinimide, Silk Extract, Hydrolyzed Silk, Sodium Citrate, Potassium Sorbate, Palmitoyl Tripeptide-1, Chrysin, Palmitoyl Tetrapeptide-7, Citric Acid, Biotin May Contain Titanium Dioxide, Iron Oxides', 
    brand: 'IT Cosmetics',
    category: 'Mini'
})

p5.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/mini-IT-CC-SPF50-21.webp'), filename: 'mini-IT-CC-SPF50-21.webp')


p6 = Product.create!({
    name: 'Gloss Bomb Universal Lip Luminizer',
    description: "A lip gloss that delivers explosive shine in three universal shades handpicked by Rihanna herself.",
    callouts: 'Free of parabens and phthalates. This product is also cruelty-free.',
    other_info: "Gloss Bomb Universal Lip Luminizer is the ultimate finishing touch to any look. The non-sticky formula is super shiny and has an addictive peach-vanilla scent. Plus, it's enriched with skin-loving ingredients to make your lips look smooth, plump, and kissable. “I made it because I wanted the girls to get kissed more.”—Rihanna, Brand Founder",
    price: 21.00,
    size: 0.3,
    ingredients: 'Polybutene, Octyldodecanol, Bis-Diglyceryl Polyacyladipate-2, Tricaprylin, Cera Microcristallina/Microcrystalline Wax/Cire Microcristalline, Polyethylene, Silica Dimethyl Silylate, Vp/Eicosene Copolymer, Vp/Hexadecene Copolymer, Butyrospermum Parkii (Shea) Butter, Mica, Sorbitan Oleate, Silica, Octyldodecyl Neopentanoate, Ethylhexyl Palmitate, Caprylyl Glycol, Butyrospermum Parkii (Shea) Butter Unsaponifiables, Aroma/Flavor, Parfum/Fragrance, Tribehenin, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Sorbitan Isostearate, Tocopherol, Tocopheryl Acetate, Synthetic Fluorphlogopite, Tetrahexyldecyl Ascorbate, Lactic Acid, Calcium Sodium Borosilicate, Calcium Aluminum Borosilicate, Polyethylene Terephthalate, Palmitoyl Tripeptide-1, Acrylates Copolymer, Tin Oxide. May Contain/Peut Contenir (+/-): Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491), Benzyl Benzoate.',
    brand: 'Fenty Beauty by Rihanna',
    category: 'Lip Gloss'
})

p6.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Fenty-Gloss-Bomb-Universal-21.webp'), filename: 'Fenty-Gloss-Bomb-Universal-21.webp')

p7 = Product.create!( 
  name: 'ShineOn Lip Jelly Non-Sticky Gloss', 
  description: 'A non-sticky, moisturizing gloss for soft, shiny lips.',
  callouts: 'This product is vegan, cruelty-free, and gluten-free.',
  other_info: 'ShineOn Lip Jelly is a lip gloss that has the shine of a gloss, the comfort of a balm, and a touch of juicy translucent color. It uses a unique blend of five nurturing oils to soothe and protect lips from drying and peeling. Plus, it has an addictive apricot-vanilla scent. Choose from six juicy shades inspired by some of our favorite colors and the meanings behind them.', 
  price: 16.00, 
  size: 0.13, 
  ingredients: 'Polybutene, Hydrogenated Polyisobutene, Hydrogenated Polybutene, Prunus Armeniaca (Apricot) Kernel Oil, Ethylene/Propylene/Styrene Copolymer, Octyldodecanol, Silica Dimethyl Silylate, Ricinus Communis (Castor) Seed Oil, Persea Gratissima (Avocado) Oil, Rosa Canina Seed Oil, Rubus Idaeus (Raspberry) Seed Oil, Oryza Sativa (Rice) Bran Extract, Helianthus Annuus (Sunflower) Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Butylene/Ehtylene/Styrene Copolymer, Aroma/Flavor, Caprylyl Glycol, Ethylhexylglycerin, Tocopherol, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, MAY CONTAIN (+/-): Iron Oxides (CI 77492), Iron Oxides (CI 77491), Iron Oxides (CI 77499), Titanium Dioxide (CI 77891), Red 7 Lake (CI 15850).',
  brand: 'Tower 28 Beauty', 
  category: 'Lip Gloss',
  how_to_use: '-Swipe on over bare lips or over your favorite lip color for soft, glossy lips.'
)

p7.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha+Product+Images/Shine-On-Lip-Tower28-16.webp'), filename: 'Shobha Product Images/Shine-On-Lip-Tower28-16.webp')

p8 = Product.create!( 
  name: "Brazilian Crush Cheirosa '62 Bum Bum Hair & Body Fragrance Mist", 
  price: 38.00, 
  size: 8.1, 
  brand: 'Sol de Janeiro', 
  category: 'Fragrance',
  description: 'A body fragrance mist, bursting with an alluring pistachio and salted caramel scent, to be used on body, hair, and lingerie.',
  callouts: 'FREE of parabens, sulfates, and phthalates.',
  other_info: 'Sol de Janeiro came together with a mutual love of the distinctly Brazilian attitude towards beauty, their secrets, and their know-how. This product supports the Brazilian philosophy that beauty isn’t a standard to reach, it’s an attitude to take. A head-to-toe sensuality that comes through in a smile, a saunter, a samba. Based in the USA, Sol de Janeiro is excited to be able to bring you the most effective, transformative, and fun beauty care experiences—incorporating the latest and greatest super ingredients from the Amazon.', 
  ingredients: 'Alcohol Denat., Aqua (Water, Eau), Parfum (Fragrance), Benzyl Alcohol, Benzyl Salicylate, Hydroxycitronellal, Coumarin, Limonene, Linalool, Benzyl Benzoate, Citral, Eugenol.',
  how_to_use: 
  '-Use all over the body any time, anywhere.
  -Spray on hair, clothes, and lingerie for that lingering scent of pistachio caramel.'
)

p8.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha+Product+Images/Brazilian-Crush-Mist-38.webp'), filename: 'Shobha Product Images/Brazilian-Crush-Mist-38.webp')


p9 = Product.create!( 
  name: "Brazilian Crush Cheirosa '62 Bum Bum Hair & Body Fragrance Mist", 
  price: 24.00, 
  size: 3.04, 
  brand: 'Sol de Janeiro', 
  category: 'Mini',
  description: 'A body fragrance mist, bursting with an alluring pistachio and salted caramel scent, to be used on body, hair, and lingerie.',
  callouts: 'FREE of parabens, sulfates, and phthalates.',
  other_info: 'Sol de Janeiro came together with a mutual love of the distinctly Brazilian attitude towards beauty, their secrets, and their know-how. This product supports the Brazilian philosophy that beauty isn’t a standard to reach, it’s an attitude to take. A head-to-toe sensuality that comes through in a smile, a saunter, a samba. Based in the USA, Sol de Janeiro is excited to be able to bring you the most effective, transformative, and fun beauty care experiences—incorporating the latest and greatest super ingredients from the Amazon.', 
  ingredients: 'Alcohol Denat., Aqua (Water, Eau), Parfum (Fragrance), Benzyl Alcohol, Benzyl Salicylate, Hydroxycitronellal, Coumarin, Limonene, Linalool, Benzyl Benzoate, Citral, Eugenol.',
  how_to_use: 
  '-Use all over the body any time, anywhere.
  -Spray on hair, clothes, and lingerie for that lingering scent of pistachio caramel.'
)

p9.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha+Product+Images/Mini-Brazilian-Crush-Mist.webp'), filename: 'Shobha Product Images/Mini-Brazilian-Crush-Mist.webp')


p10 = Product.create!( 
  name: 'Pure Radiant Tinted Moisturizer Broad Spectrum SPF 30', 
  price: 46.00, 
  size: 1.9, 
  brand: 'NARS', 
  category: 'Body',
  description: 'A lightweight tinted moisturizer that hydrates and smooths skin while brightening with vitamin C and protecting with SPF 30.',
  callouts: 'Free of parabens, formaldehydes, formaldehyde-releasing agents, phthalates, mineral oil, retinyl palmitate, oxybenzone, coal tar, hydroquinone, sulfates SLS & SLES, triclocarban, triclosan, and contains less than one percent synthetic fragrance. It is also vegan and gluten-free.',
  other_info: 'This iconic tinted moisturizer is now available in 16 shades for all skin types and tones. The coveted formula smooths on buildable, oil-free coverage infused with SPF 30 and is packed with skincare ingredients to hydrate, smooth, brighten, and protect.', 
  ingredients: 'Water, Dimethicone, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Butylene Glycol, Propanediol, Diethylhexyl Succinate, Glycerin, Nylon-12, Cyclomethicone, Peg-9 Polydimethylsiloxyethyl Dimethicone, Peg-10 Dimethicone, Aluminum Hydroxide, Diphenylsiloxy Phenyl Trimethicone, Disteardimonium Hectorite, Sorbitan Sesquiisostearate, Stearic Acid Phenoxyethanol, Polymethylsilsesquioxane, Fragrance, Dimethicone/Vinyl, Dimethicone Crosspolymer, Trisodium, Edta, Aluminum Distearate, Talc, Ascorbyl Glucoside, Polysilicone-2, Vibrio Alginolyticus Ferment Filtrate, Tocopherol, Alteromonas Ferment Filtrate, Maris Sal (Sea Salt), Hydrogen Dimethicone, Bht, Algae (Algae Extract), Sodium Metabisulfite, Curcuma Longa [Curcuma Longa (Turmeric) Root Extract], Potassium Sorbate, Geraniol, Limonene, Citral, Linalool [+/- (May Contain): Ci 77891 (Titanium Dioxide), Ci 77491 (Iron Oxides), Ci 77492 (Iron Oxides), Ci 77499 (Iron Oxides)].',
  how_to_use: 
  '-Dispense small amount of product.
  -Warm with fingertips.
  -Press and blend onto skin.
  -Build to desired coverage.'
)

p10.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha+Product+Images/Pure-Moisturizer-NARS-46.webp'), filename: 'Shobha Product Images/Pure-Moisturizer-NARS-46.webp')


puts "Products Done!"


puts "Creating reviews..."

Review.create!(
  title: 'first review',
  body: 'loved this product',
  user_id: 1,
  product_id: 1,
  rating: 5
)

10.times do
  Review.create!(
    title: Faker::Lorem.sentence(word_count: 6),
    user_id: User.all.sample.id,
    product_id: Product.all.sample.id,
    rating: Faker::Number.between(from: 1, to: 5),
    body: Faker::Lorem.paragraph
  )
end
puts "Reviews Done!"

  
puts "Done!"
