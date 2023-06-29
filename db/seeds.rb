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
    category: 'Skincare,Body',
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
  name: 'Gloss Bomb Universal Lip Luminizer',
  description: "A lip gloss that delivers explosive shine in three universal shades handpicked by Rihanna herself.",
  callouts: 'Free of parabens and phthalates. This product is also cruelty-free.',
  other_info: "Gloss Bomb Universal Lip Luminizer is the ultimate finishing touch to any look. The non-sticky formula is super shiny and has an addictive peach-vanilla scent. Plus, it's enriched with skin-loving ingredients to make your lips look smooth, plump, and kissable. “I made it because I wanted the girls to get kissed more.”—Rihanna, Brand Founder",
  price: 21.00,
  size: 0.3,
  ingredients: 'Polybutene, Octyldodecanol, Bis-Diglyceryl Polyacyladipate-2, Tricaprylin, Cera Microcristallina/Microcrystalline Wax/Cire Microcristalline, Polyethylene, Silica Dimethyl Silylate, Vp/Eicosene Copolymer, Vp/Hexadecene Copolymer, Butyrospermum Parkii (Shea) Butter, Mica, Sorbitan Oleate, Silica, Octyldodecyl Neopentanoate, Ethylhexyl Palmitate, Caprylyl Glycol, Butyrospermum Parkii (Shea) Butter Unsaponifiables, Aroma/Flavor, Parfum/Fragrance, Tribehenin, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Sorbitan Isostearate, Tocopherol, Tocopheryl Acetate, Synthetic Fluorphlogopite, Tetrahexyldecyl Ascorbate, Lactic Acid, Calcium Sodium Borosilicate, Calcium Aluminum Borosilicate, Polyethylene Terephthalate, Palmitoyl Tripeptide-1, Acrylates Copolymer, Tin Oxide. May Contain/Peut Contenir (+/-): Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491), Benzyl Benzoate.',
  brand: 'Fenty Beauty by Rihanna',
  category: 'Lips,New',
  how_to_use: "-Wear Gloss Bomb alone or layer over lipstick as the finishing touch to the FENTY Face.
  -Artistry Pro Tip: Try Gloss Bomb over your favorite lip color for super-lustrous dimension."
})

p2.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Fenty-Gloss-Bomb-Universal-21.webp'), filename: 'Fenty-Gloss-Bomb-Universal-21.webp')

p3 = Product.create!( 
  name: "Brazilian Crush Cheirosa '62 Bum Bum Hair & Body Fragrance Mist", 
  price: 38.00, 
  size: 8.1, 
  brand: 'Sol de Janeiro', 
  category: 'Fragrance,New',
  description: 'A body fragrance mist, bursting with an alluring pistachio and salted caramel scent, to be used on body, hair, and lingerie.',
  callouts: 'FREE of parabens, sulfates, and phthalates.',
  other_info: 'Sol de Janeiro came together with a mutual love of the distinctly Brazilian attitude towards beauty, their secrets, and their know-how. This product supports the Brazilian philosophy that beauty isn’t a standard to reach, it’s an attitude to take. A head-to-toe sensuality that comes through in a smile, a saunter, a samba. Based in the USA, Sol de Janeiro is excited to be able to bring you the most effective, transformative, and fun beauty care experiences—incorporating the latest and greatest super ingredients from the Amazon.', 
  ingredients: 'Alcohol Denat., Aqua (Water, Eau), Parfum (Fragrance), Benzyl Alcohol, Benzyl Salicylate, Hydroxycitronellal, Coumarin, Limonene, Linalool, Benzyl Benzoate, Citral, Eugenol.',
  how_to_use: 
  '-Use all over the body any time, anywhere.
  -Spray on hair, clothes, and lingerie for that lingering scent of pistachio caramel.'
)

p3.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha+Product+Images/Brazilian-Crush-Mist-38.webp'), filename: 'Shobha Product Images/Brazilian-Crush-Mist-38.webp')


p4 = Product.create!({
  name: 'Mini Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide',
  description:
  'A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with an instant glow.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion.',
  callouts: 'This product is cruelty-free, and gluten-free.',
  other_info: 'This multitasking primer with SPF gives skin an instant glow-up. Formulated with hyaluronic acid, niacinamide & vitamin B5 to hydrate & perfect, this broad spectrum tinted sunscreen creates an instant glow on its own or under makeup. Plus, it helps filter blue light from tech!',
  price: 22.00,
  size: 0.68,
  ingredients: 'Active: Avobenzone 3%, Octisalate 5%, Octocrylene 10% Inactive: Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/ Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid', 
  brand: 'Supergoop!',
  category: 'Skincare,Mini Size',
  how_to_use: 
  '-Apply generously and evenly as the last step in your skincare routine, before your favorite foundation, and after your moisturizer.
  -You can also wear this on its own for a no-makeup makeup glow.'
})

p4.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/mini-glowscreen.webp'), filename: 'mini-glowscreen.webp')

p5 = Product.create!({
  name: 'CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+',
  description: "The #1 SPF foundation in America* is a full-coverage foundation, hydrating & anti-aging serum, and SPF 50+ sunscreen in one—now in extended shades.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion.",
  callouts: 'Free of sulfates parabens and phthalates.',
  other_info: 'The full coverage, natural finish of a CC cream foundation meets hydration to color correct and camouflage skin concerns like acne scars, wrinkles, redness, dark circles under eyes, large pores & uneven skin tone. Made with skin-loving ingredients, it moisturizes for visibly healthy & smooth skin.',
  price: 47.00,
  size: 1.08,
  ingredients: 'Active Ingredients Titanium Dioxide 9% Zinc Oxide 6.3% Cosmetic Ingredients Water, Phenyl Trimethicone, Dimethicone, Butylene Glycol. Butylene Glycol Dicaprylate/Dicaprate, Orbignya Oleifera Seed Oil, Butyloctyl Salicylate, Cetyl Peg/Ppg-10/1 Dimethicone, Cyclopentasiloxane, Snail Secretion Filtrate, Aluminum Hydroxide, Magnesium Sulfate, Polyglyceryl-4 Isostearate, Stearic Acid, Cyclohexasiloxane, Dimethicone/Vinyl Dimethicone Crosspolymer, Hexyl Laurate, Calcium Stearate, Triethoxycaprylylsilane, Caprylyl Glycol, Ethyl Hexanediol, Ethylhexylglycerin, Limonene, Citrus Limon (Lemon) Peel Oil, Sorbitan Isostearate, Tocopheryl Acetate, Phenoxyethanol, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, 1,2-Hexanediol, Adenosine, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Aurantifolia (Lime) Oil, Pinus Sylvestris Leaf Oil, Linalool, Eucalyptus Globulus Leaf Oil, Glycerin, Citral, Niacinamide, Hyaluronic Acid, Colloidal Oatmeal, Hydrolyzed Collagen, Steareth-20, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Camellia Sinensis Leaf Extract, Olea Europaea (Olive) Leaf Extract, Chlorhexidine Digluconate, N-Hydroxysuccinimide, Silk Extract, Hydrolyzed Silk, Sodium Citrate, Potassium Sorbate, Palmitoyl Tripeptide-1, Chrysin, Palmitoyl Tetrapeptide-7, Citric Acid, Biotin May Contain Titanium Dioxide, Iron Oxides', 
  brand: 'IT Cosmetics',
  category: 'Skincare, ',
  how_to_use: 
  "- Apply 1-2 pumps of CC+ Cream SPF 50+ to clean skin.

  - For best results, use a foundation makeup brush IT Cosmetics Heavenly Luxe Complexion Perfection Brush #7 (sold separately) to buff and blend a smooth, even layer of foundation onto your face, neck and décolleté.
  
  - To set, use Bye Bye Pores Translucent Pressed Setting Powder (sold separately) and finish it off with It's Your Skin But Better Setting Spray for a flawless finish that lasts."
})

p5.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/IT-CC-SPF50-47.webp'), filename: 'IT-CC-SPF50-47.webp')

p6 = Product.create!( 
  name: 'Pure Radiant Tinted Moisturizer Broad Spectrum SPF 30', 
  price: 46.00, 
  size: 1.9, 
  brand: 'NARS', 
  category: 'Body,Skincare',
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

p6.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha+Product+Images/Pure-Moisturizer-NARS-46.webp'), filename: 'Shobha Product Images/Pure-Moisturizer-NARS-46.webp')

p7 = Product.create!({
  name: 'Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide',
  description:
  'A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with an instant glow.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion.',
  callouts: 'This product is cruelty-free, and gluten-free.',
  other_info: 'This multitasking primer with SPF gives skin an instant glow-up. Formulated with hyaluronic acid, niacinamide & vitamin B5 to hydrate & perfect, this broad spectrum tinted sunscreen creates an instant glow on its own or under makeup. Plus, it helps filter blue light from tech!',
  price: 38.00,
  size: 1.7,
  ingredients: 'Active: Avobenzone 3%, Octisalate 5%, Octocrylene 10% Inactive: Water, Propanediol, Butyloctyl Salicylate, Glycerin, C12-15 Alkyl Benzoate, Polymethylsilsesquioxane, Niacinamide, Glyceryl Stearate Citrate, Bismuth Oxychloride, Mica, Titanium Dioxide, Lauryl Lactate, Isododecane, Isodecyl Neopentanoate, Glyceryl Stearate, Diisopropyl Sebacate, Cetyl Phosphate, Caprylic/Capric Triglyceride, Coco-Caprylate, Ethylhexyl Hydroxystearate, Butylene Glycol, Arginine, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Iron Oxides, Sodium Hyaluronate, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Trisodium Ethylenediamine Disuccinate, Phospholipids, Limonium Gerberi Extract, Leuconostoc/ Radish Root Ferment Filtrate, Theobroma Cacao (Cocoa) Seed Extract, Pantothenic Acid, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Ferulic Acid', 
  brand: 'Supergoop!',
  category: 'Skincare,Body',
  how_to_use: 
  '-Apply generously and evenly as the last step in your skincare routine, before your favorite foundation, and after your moisturizer.
  -You can also wear this on its own for a no-makeup makeup glow.'
})

p7.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Supergoop-Glowscreen-48.webp'), filename: 'Supergoop-Glowscreen-48.webp')
    
p8 = Product.create!({
  name: 'CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+',
  description: 
  "The #1 SPF foundation in America* is a full-coverage foundation, hydrating & anti-aging serum, and SPF 50+ sunscreen in one—now in extended shades.\n\nSkincare Concerns: Dullness, Dryness, and Fine Lines and Wrinkles\n\nFormulation: Lotion.",
  callouts: 'Free of sulfates parabens and phthalates.',
  other_info: "The full coverage, natural finish of a CC cream foundation meets hydration to color correct and camouflage skin concerns like acne scars, wrinkles, redness, dark circles under eyes, large pores & uneven skin tone. Made with skin-loving ingredients, it moisturizes for visibly healthy & smooth skin.",
  price: 21.00,
  size: 0.4,
  ingredients: 'Active Ingredients Titanium Dioxide 9% Zinc Oxide 6.3% Cosmetic Ingredients Water, Phenyl Trimethicone, Dimethicone, Butylene Glycol. Butylene Glycol Dicaprylate/Dicaprate, Orbignya Oleifera Seed Oil, Butyloctyl Salicylate, Cetyl Peg/Ppg-10/1 Dimethicone, Cyclopentasiloxane, Snail Secretion Filtrate, Aluminum Hydroxide, Magnesium Sulfate, Polyglyceryl-4 Isostearate, Stearic Acid, Cyclohexasiloxane, Dimethicone/Vinyl Dimethicone Crosspolymer, Hexyl Laurate, Calcium Stearate, Triethoxycaprylylsilane, Caprylyl Glycol, Ethyl Hexanediol, Ethylhexylglycerin, Limonene, Citrus Limon (Lemon) Peel Oil, Sorbitan Isostearate, Tocopheryl Acetate, Phenoxyethanol, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, 1,2-Hexanediol, Adenosine, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Aurantifolia (Lime) Oil, Pinus Sylvestris Leaf Oil, Linalool, Eucalyptus Globulus Leaf Oil, Glycerin, Citral, Niacinamide, Hyaluronic Acid, Colloidal Oatmeal, Hydrolyzed Collagen, Steareth-20, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Camellia Sinensis Leaf Extract, Olea Europaea (Olive) Leaf Extract, Chlorhexidine Digluconate, N-Hydroxysuccinimide, Silk Extract, Hydrolyzed Silk, Sodium Citrate, Potassium Sorbate, Palmitoyl Tripeptide-1, Chrysin, Palmitoyl Tetrapeptide-7, Citric Acid, Biotin May Contain Titanium Dioxide, Iron Oxides', 
  brand: 'IT Cosmetics',
  category: 'Skincare,Mini Size'
})

p8.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/mini-IT-CC-SPF50-21.webp'), filename: 'mini-IT-CC-SPF50-21.webp')

p9 = Product.create!( 
  name: 'ShineOn Lip Jelly Non-Sticky Gloss', 
  description: 'A non-sticky, moisturizing gloss for soft, shiny lips.',
  callouts: 'This product is vegan, cruelty-free, and gluten-free.',
  other_info: 'ShineOn Lip Jelly is a lip gloss that has the shine of a gloss, the comfort of a balm, and a touch of juicy translucent color. It uses a unique blend of five nurturing oils to soothe and protect lips from drying and peeling. Plus, it has an addictive apricot-vanilla scent. Choose from six juicy shades inspired by some of our favorite colors and the meanings behind them.', 
  price: 16.00, 
  size: 0.13, 
  ingredients: 'Polybutene, Hydrogenated Polyisobutene, Hydrogenated Polybutene, Prunus Armeniaca (Apricot) Kernel Oil, Ethylene/Propylene/Styrene Copolymer, Octyldodecanol, Silica Dimethyl Silylate, Ricinus Communis (Castor) Seed Oil, Persea Gratissima (Avocado) Oil, Rosa Canina Seed Oil, Rubus Idaeus (Raspberry) Seed Oil, Oryza Sativa (Rice) Bran Extract, Helianthus Annuus (Sunflower) Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Butylene/Ehtylene/Styrene Copolymer, Aroma/Flavor, Caprylyl Glycol, Ethylhexylglycerin, Tocopherol, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, MAY CONTAIN (+/-): Iron Oxides (CI 77492), Iron Oxides (CI 77491), Iron Oxides (CI 77499), Titanium Dioxide (CI 77891), Red 7 Lake (CI 15850).',
  brand: 'Tower 28 Beauty', 
  category: 'Lips,New',
  how_to_use: '-Swipe on over bare lips or over your favorite lip color for soft, glossy lips.'
)

p9.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha+Product+Images/Shine-On-Lip-Tower28-16.webp'), filename: 'Shobha Product Images/Shine-On-Lip-Tower28-16.webp')

p10 = Product.create!( 
  name: "Mini Brazilian Crush Cheirosa '62 Bum Bum Hair & Body Fragrance Mist", 
  price: 24.00, 
  size: 3.04, 
  brand: 'Sol de Janeiro', 
  category: 'Fragrance,Mini Size',
  description: 'A body fragrance mist, bursting with an alluring pistachio and salted caramel scent, to be used on body, hair, and lingerie.',
  callouts: 'FREE of parabens, sulfates, and phthalates.',
  other_info: 'Sol de Janeiro came together with a mutual love of the distinctly Brazilian attitude towards beauty, their secrets, and their know-how. This product supports the Brazilian philosophy that beauty isn’t a standard to reach, it’s an attitude to take. A head-to-toe sensuality that comes through in a smile, a saunter, a samba. Based in the USA, Sol de Janeiro is excited to be able to bring you the most effective, transformative, and fun beauty care experiences—incorporating the latest and greatest super ingredients from the Amazon.', 
  ingredients: 'Alcohol Denat., Aqua (Water, Eau), Parfum (Fragrance), Benzyl Alcohol, Benzyl Salicylate, Hydroxycitronellal, Coumarin, Limonene, Linalool, Benzyl Benzoate, Citral, Eugenol.',
  how_to_use: 
  '-Use all over the body any time, anywhere.
  -Spray on hair, clothes, and lingerie for that lingering scent of pistachio caramel.'
)

p10.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha+Product+Images/Mini-Brazilian-Crush-Mist.webp'), filename: 'Shobha Product Images/Mini-Brazilian-Crush-Mist.webp')

#New Products

p11 = Product.create!( 
  name: 'Nutritive 8H Magic Night Serum Hydrating Treatment for Dry Hair', 
  price: 59.00, 
  size: 3.04, 
  brand: 'Kérastase', 
  category: 'New,Hair',
  description: 'A luxurious overnight nourishing leave-in serum that hydrates, strengthens, detangles, and enhance shine while you sleep.',
  callouts: ' FREE of parabens, sulfates, and phthalates.',
  other_info: 'This intensely nourishing leave-in serum hydrates, adds deep nutrition to moisturize, and detangles to leave hair soft and shiny by morning. It is formulated with plant-based proteins and niacinamide and protects from pillow friction, providing less frizz and strength. This serum is also loved by pro stylists and hydrates hair in just eight hours while giving hair instant suppleness and radiant shine with a smooth satin touch.', 
  ingredients: 'Aqua / Water, Dimethicone, C13-16 Isoalkane, Niacinamide, Glycerin, Polyacrylamide, Phenoxyethanol, C13-14 Isoalkane, Laureth-7, Panthenol, Ascorbyl Glucoside, Butylene Glycol, Linalool, Hydroxycitronellal, Benzyl Salicylate, Benzyl Alcohol, Hexyl Cinnamal, Citronellol, Hydrolyzed Wheat Protein, Alpha-Isomethyl Ionone, Coumarin, Hydrolyzed Corn Protein, Hydrolyzed Soy Protein, Limonene, Iris Florentina Root Extract, Citric Acid, Ci 19140 / Yellow 5, Ci 14700 / Red 4, Parfum / Fragrance.',
  how_to_use: 
  '-Before going to sleep, apply one to two pumps, depending on hair length, then massage into lengths and ends of dry or damp hair.
  -Leave in overnight.
  -No need to rinse in the morning.
  -Repeat three nights a week or as directed by a stylist.',
  fragrance: 'This serum smells like a fresh and floral composition, with top notes of ylang, royal jelly, and violet leaves for a clean scent, middle notes of wild rose, jasmine, and tonka bean to capture the floral aroma, and bottom notes of sandalwood, white cedarwood, and cinnamon.'
)

p11.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-New/Nutritive-Magic-Hair-Kerastase59.webp'), filename: 'Shobha-Images-New/Nutritive-Magic-Hair-Kerastase59.webp')

p12 = Product.create!( 
  name: 'Rosy Glow Blush', 
  price: 40.00, 
  size: 0.6, 
  brand: 'Dior', 
  category: 'New,Makeup',
  description: 'A secret weapon to create the appearance of naturally rosy cheeks for a fresh, glowy effect.',
  callouts: 'FREE of parabens, sulfates, and phthalates.',
  other_info: "Infused with color reviver technology, this innovative blush reacts to the skin's moisture level upon application to deliver a customized rosy effect. The result is a natural, instant healthy glow that lasts all day long.", 
  ingredients: 'Synthetic Fluorphlogopite, Mica, Dimethicone, Boron Nitride, Lauroyl Lysine, Zinc Stearate, Silica, Cellulose, Ethylhexylglycerin, Sodium Dehydroacetate, Pentylene Glycol, Stearic Acid, Aqua (Water), Tocopherol, [+/- Ci 77891 (Titanium Dioxide), Ci 45410 (Red 27)].',
  how_to_use: 
  '-Apply Dior Rosy Glow Blush using the N°16 blush brush, lightly stroking the tops of the cheekbones.
  -Wait a few moments for the custom, ultra-natural pink shade to be revealed.
  -Use with the coordinating Lip Glow shade (sold separately) for a fresh, natural, and custom result.'
)

p12.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-New/Rosy-Glow-Blush-Dior40.webp'), filename: 'Shobha-Images-New/Rosy-Glow-Blush-Dior40.webp')

p13 = Product.create!( 
  name: 'Glow Sculpt Multi-Use Cream Highlighting Blush', 
  price: 32.00, 
  size: 0.20, 
  brand: 'Saie', 
  category: 'New,Makeup',
  description: 'The flush of blush meets a hydrating, smoothing highlighter. This silky-cream, talc-free formula achieves a radiant, lifted effect while moisturizing and nourishing skin.',
  callouts: 'This product is vegan, gluten-free, cruelty-free, and comes in recyclable packaging.',
  other_info: 'These clean pigments blend with fine micropearls to create the ultimate buildable shimmery blush or sculpting glowy highlighter. Formulated with hydrating Hyaluronic Acid and moisturizing Kukui Oil, Glow Sculpt’s formula leaves a weightless, diffused glow that’s never chalky or glittery.', 
  ingredients: 'Caprylic/Capric Triglyceride, Octyldodecanol, Simmondsia Chinensis Seed Oil (Simmondsia Chinensis (Jojoba) Seed Oil, Mica, Calcium Sodium Borosilicate, Synthetic Fluorphlogopite, Synthetic Beeswax, Helianthus Annuus Seed Cera (Helianthus Annuus (Sunflower) Seed Wax, Tin Oxide, Aleurites Moluccana Seed Oil (Aleurites Moluccanus (Kukui) Seed Oil, Passiflora Edulis Seed Oil, (Passiflora Edulis (Maracuja) Seed Oil, Ethylhexyl Palmitate, Helianthus Annuus Seed Oil (Helianthus Annuus (Sunflower) Seed Oil, Victoria Amazonica Flower Extract, Trihydroxystearin, Sodium Hyaluronate, Glucomannan. [+/- May Contain/ Peut Contenir: Ci 77891 (Titanium Dioxide), Ci 15850 (Red 6 Lake), Ci 77491 (Iron Oxides), Ci 77492 (Iron Oxides), Ci 77499 (Iron Oxides), Ci 77510 (Ferric Ferrocyanide)].',
  how_to_use: 
  "-After applying your typical complexion routine, layer Glow Sculpt on top. Glow Sculpt stacks nicely on top of or below your blush or bronzer.

  -Use your fingertips or The Double Brush, specifically designed for Glow Sculpt, for seamless application anywhere you want to add a touch of blushy glow like the high points of cheekbones, eyes, cupid's bow, or bridge of nose. The large end of the brush works to sculpt the cheeks while the smaller end works for precise application like highlighting."
)

p13.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-New/Glow-Sculpt-Blush-Saie32.webp'), filename: 'Shobha-Images-New/Glow-Sculpt-Blush-Saie32.webp')

p14 = Product.create!( 
  name: 'Lip Power Matte Long Lasting Lipstick', 
  price: 45.00, 
  size: 0.10, 
  brand: 'Armani Beauty', 
  category: 'New,Makeup',
  description: 'A long-lasting matte lipstick with rich color and a unique, soft-glide technology that delivers moisture, all-day comfort, and a creamy application.',
  callouts: 'FREE of parabens, sulfates, and phthalates.',
  other_info: 'This lipstick delivers rich color in one swipe. Formulated with a hydrating olive and jojoba oil blend, it sets with a non-drying, matte finish. All shades are made with coated pigment to enhance wear and color. The drop-shaped bullet carefully lines and shapes lips, giving you total control.', 
  ingredients: 'Romanza Trimethylsiloxyphenyl Dimethicone, Isohexadecane, Octyldodecyl Neopentanoate, Polyethylene, Hydrogenated Styrene/Methylstyrene/Indene Copolymer, Synthetic Fluorphlogopite, VP/Hexadecene Copolymer, Hydrogenated Polyisobutene, Acrylic Acid/Isobutyl Acrylate/Isobornyl Acrylate Copolymer, CI 77891/Titanium Dioxide, Paraffin, Cera Microcristallina/Microcrystalline Wax, VP/Eicosene Copolymer, Mica, Synthetic Wax, CI 77491/Iron Oxides, CI 77492/Iron Oxides, CI 77499/Iron Oxides, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, CI 15850/Red 7, Aluminum Hydroxide, Silica, Tocopherol.',
  how_to_use: 
  "-For the most intense color, apply to clean, bare lips.
  -Start by shaping lip with tip of drop-shaped bullet at center of Cupid's bow, then fill in remaining lip, working from center outward.
  -For a more muted look, fill in color at center of your lips and dab outward with your finger."
)

p14.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-New/Lip-Power-Armani45.webp'), filename: 'Shobha-Images-New/Lip-Power-Armani45.webp')

p15 = Product.create!( 
  name: 'I Want Choo Forever Eau de Parfum', 
  price: 132.00, 
  size: 3.4, 
  brand: 'JIMMY CHOO', 
  category: 'New,Fragrance',
  description: 'I Want Choo Forever encapsulates a sense of confidence and elegance unlike any other. The I Want Choo Forever woman is fearless, seductive, a bit unexpected, passionate, and here to have fun—she evolves in a joyful environment, always with her girlfriends.',
  callouts: 'FREE of parabens, sulfates, and phthalates.',
  other_info: 'The modern bottle design is shaped to reflect a feminine silhouette embellished with a jewel-like JC monogram on an elegant black, degrade lacquer color. The bottle is topped with a gold spray cap with a hammered effect, echoing the craftsmanship of the brand. The intense, sparkling, black and gold glitter box packaging reveals the precious JC monogram signature.', 
  ingredients: 'Alcohol Denat. (Sd Alcohol 40-B), Benzyl Salicylate, Linalool, Hydroxycitronellal, Coumarin, Limonene, Citronellol, Citral, Farnesol, Benzyl Alcohol, Geraniol, Water, Ethylhexyl Methoxycinnamate, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, BHT.',
  how_to_use: 
  '-Fragrance is intensified by the warmth of your own body. Apply in the creases of your knees and elbows for a longer-lasting, stronger scent. 
  -After applying, avoid rubbing or dabbing skin. This breaks down the fragrance, causing it to wear off more quickly. 
  -If you prefer placing fragrance on your wrists, be sure to reapply after frequent handwashing, as this tends to rinse off the scent. 
  -Replace fragrance after 12 months. Expired perfumes more than a year old lose the integrity of the original scent.',
  fragrance: 'I Want Choo Forever is a chypre amber gourmand fragrance with notes of juicy rose, black cherry liquor, and moss accord. This eau de parfum encapsulates a sense of confidence and elegance unlike any other. The I Want Choo Forever Woman is fearless, seductive, and a bit unexpected.'
)

p15.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-New/I-Want-Choo132.webp'), filename: 'Shobha-Images-New/I-Want-Choo132.webp')

p16 = Product.create!( 
  name: 'Rio Radiance Illuminating Body Cream', 
  price: 48.00, 
  size: 8.1, 
  brand: 'Sol de Janeiro', 
  category: 'New,Body',
  description: 'An illuminating, fast-absorbing body cream that provides lightweight hydration for gorgeous, radiant skin.',
  callouts: 'FREE of parabens, sulfates, and phthalates.',
  other_info: 'This limited-edition body moisturizer is infused with ethically sourced mica and squalane for glowing, hydrated skin—without feeling greasy. Beachy notes of solar tuberose and leite de coco capture the nostalgic scent of sunshine on skin and warm sand for carefree vacation vibes.', 
  ingredients: 'Ethically Sourced Mica: Immediately adds luminosity to the skin. Squalane: Keeps skin moisturized. Carrot Seed Oil: Nourishes skin with vitamin C and omega-6.',
  how_to_use: 
  '-Massage in a circular motion to promote optimal absorption and circulation.
  -Use all over your body for the ultimate glow.'
)

p16.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-New/Rio-radiance-Sol48.webp'), filename: 'Shobha-Images-New/Rio-radiance-Sol48.webp')


#Mini Size Products

p17 = Product.create!( 
  name: 'Mini Airbrush Flawless Finish Setting Powder', 
  price: 28.00, 
  size: 0.11, 
  brand: 'Charlotte Tilbury', 
  category: 'Mini Size,Makeup',
  description: 'An ultra-fine setting powder in a perfect try-me mini size that blurs the look of imperfections and visibly reduces shine.',
  callouts: 'Free of parabens and sulfates SLS & SLES. It is also vegan, gluten-free, and cruelty-free.',
  other_info: "This breathable, micro-fine powder gives you an immaculate-looking complexion and acts like a luxe, micro-fine cashmere veil on top of skin for a bright, flawless finish. This product doesn’t cake or sit in lines and is perfect if you have an oily T-zone or complexion.", 
  ingredients: 'Talc, Mica, Polymethyl Methacrylate, Dimethicone, Silica, Pentaerythrityl Tetraisostearate, Cetearyl Ethylhexanoate, Zinc Stearate, Zea Mays (Corn) Starch, Caprylyl Glycol, Ethylhexylglycerin, Potassium Sorbate, Chlorphenesin, Tocopheryl Acetate, Pei-10, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Rosa Multiflora Flower Wax, Tetrasodium Edta, Dimethiconol, [+/- Iron Oxides (Ci 77491, Ci 77492, Ci 77499)].',
  how_to_use: 
  '-Using the Sculpt Brush (sold separately), apply Airbrush Flawless Finish Setting Powder around the nose, T-zone, and any other oily areas that need to be mattified.
  -It can be used on its own or on top of foundation and concealer to set them in place.
  -For oily skin types looking for a truly flawless finish, apply Airbrush Flawless Finish Setting Powder all over the face. For even more coverage, start from the T-zone and work outwards and upwards.'
)

p17.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Mini/Mini-Airbrush-Powder-Tilbury28.webp'), filename: 'Shobha-Images-Mini/Mini-Airbrush-Powder-Tilbury28.webp')

p18 = Product.create!( 
  name: 'Mini Dewy Skin Mist', 
  price: 22.00, 
  size: 0.4, 
  brand: 'Tatcha', 
  category: 'Mini Size,Skincare',
  description: 'A silky, fine mist moisturizer that can be used under or over makeup for dewy glowing skin anytime, anywhere.',
  callouts: 'This product is cruelty-free and comes in recyclable packaging.',
  other_info: 'This product is non-irritating, non-sensitizing, dermatologist tested, and cruelty-free. It is also formulated without mineral oil, synthetic fragrances, urea, DEA, or TEA. Beauty that gives back: Your purchase of a full-sized Tatcha skincare item will fund a day of school for incredible girls through the brand’s Beautiful Faces, Beautiful Futures partnership with Room to Read.', 
  ingredients: 'AQUA/WATER/EAU, GLYCERIN, SQUALANE, PROPANEDIOL, DIMETHICONE, TRIETHYLHEXANOIN, POLYGLYCERYL-2 DIISOSTEARATE, PPG-5-CETETH-10 PHOSPHATE, SACCHAROMYCES/RICE FERMENT FILTRATE, CAMELLIA SINENSIS LEAF EXTRACT, CLADOSIPHON OKAMURANUS EXTRACT, CAMELLIA JAPONICA SEED OIL, SODIUM HYALURONATE, SERICIN, GLYCYRRHIZA GLABRA (LICORICE) ROOT EXTRACT, ORYZA SATIVA (RICE) GERM OIL, CHONDRUS CRISPUS EXTRACT, PANAX GINSENG ROOT EXTRACT, ROYAL JELLY EXTRACT, ZIZIPHUS JUJUBA FRUIT EXTRACT, THYMUS SERPYLLUM EXTRACT, SCUTELLARIA BAICALENSIS ROOT EXTRACT, TOCOPHEROL, TRIDECETH-12, SODIUM LAUROYL LACTYLATE, SORBITAN STEARATE, ETHYLHEXYLGLYCERIN, BEHENYL ALCOHOL, GLYCERYL STEARATE SE, SODIUM BENZOATE, GLUCONOLACTONE, PARFUM/FRAGRANCE, ALCOHOL, PHENOXYETHANOL, LIMONENE, LINALOOL',
  how_to_use: 
  '-Shake the mist gently and spritz two to three times from six inches away.
  -Use before makeup to soothe and hydrate, or use after makeup to set and smooth.
  -Can be sprayed on foundation brush or sponge to use with foundation for a dewy glow
  -Can be used throughout the day on top of makeup to rehydrate and re-energize the complexion
  -Apply on airplanes or during winter for extra hydration.
  -Apply on hair for a beautiful sheen or as a detangler for kids.'
)

p18.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Mini/Mini-Dewy-Skin-Mist-Tatcha22.webp'), filename: 'Shobha-Images-Mini/Mini-Dewy-Skin-Mist-Tatcha22.webp')

p19 = Product.create!( 
  name: 'Mini SOS Daily Rescue Facial Spray', 
  price: 12.00, 
  size: 1.0 , 
  brand: 'Tower 28 Beauty', 
  category: 'Mini Size,Skincare',
  description: 'A simple-but-effective, pH-balancing hypochlorous acid toner that helps minimize visible skin irritation and redness and keep flare-ups at bay.',
  callouts: 'This product is vegan, gluten-free, cruelty-free, and comes in recyclable packaging.',
  other_info: 'This multihyphenate spray, powered by stable hypochlorous acid, helps to soothe and nourish stressed-out skin on the face and body (including visible blemishes and sunburns) while supporting the skin barrier. This product also has the National Eczema Association Seal of Acceptance™.', 
  ingredients: 'Water, Sodium Chloride, Hypochlorous Acid.',
  how_to_use: 
  '-Use morning and evening.
  -For best results, spray on dry, freshly- cleansed skin.
  -Let dry down completely before applying moisturizer.
  -Use for blemishes, sunburns, rashes, eczema, post-workout, and post-procedure.'
)

p19.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Mini/Mini-SOS-Spray-Tower28-12.webp'), filename: 'Shobha-Images-Mini/Mini-SOS-Spray-Tower28-12.webp')

p20 = Product.create!( 
  name: 'Mini Radiant Creamy Concealer', 
  price: 15.00, 
  size: 0.05, 
  brand: 'NARS', 
  category: 'Mini Size,Makeup',
  description: 'A travel size concealer that brightens, corrects, and perfects for 16 hours with a creamy, medium-to-buildable coverage and natural, radiant finish.',
  callouts: 'Free of parabens, formaldehydes, formaldehyde-releasing agents, phthalates, mineral oil, retinyl palmitate, oxybenzone, coal tar, hydroquinone, sulfates SLS & SLES, triclocarban, triclosan, and contains less than one percent synthetic fragrance. It is also vegan.',
  other_info: 'A long-lasting, skincare-infused formula that evens skin tone, blurs the appearance of dark spots and blemishes, and brightens undereyes, while retaining moisture for 24-hour hydration. May be used to highlight and contour. Crease-resistant and transfer-proof. Available in 30 shades.', 
  ingredients: 'Water, Dimethicone, Titanium Dioxide, Iron Oxides, Hydrogenated Polydecene, Propanediol, Butylene Glycol, Peg-9 Polydimethylsiloxyethyl Dimethicone, Glycerin, Disteardimonium Hectorite, Peg-10 Dimethicone, Methyl Methacrylate Crosspolymer, Bis-Butyldimethicone Polyglyceryl-3, Mica, Sorbitan Sesquiisostearate, Dimethicone/Vinyl Dimethicone Crosspolymer, Isostearic Acid, Phenoxyethanol, Aluminum Hydroxide, Polysilicone-2, Maltodextrin, Trisodium Edta, Lecithin, Silica, Tin Oxide, Triethoxycaprylylsilane, Tocopheryl Acetate, Sodium Metabisulfite, Magnolia Officinalis Bark Extract, Tocopherol, Vitis Vinifera (Grape) Seed Extract.',
  how_to_use: 
  '-Can be applied directly from the applicator, with fingertips, or with the #10 Radiant Creamy Concealer Brush (sold separately).
  -To use as a highlighter, select one to three shades lighter than your concealer shade and place on high points of the face.
  -To add contour and dimension, apply concealer in the hollows of the cheeks, on temples, and along the hair and jaw lines.'
)

p20.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Mini/Mini-Radiant-Concealer-NARS15.webp'), filename: 'Shobha-Images-Mini/Mini-Radiant-Concealer-NARS15.webp')

p21 = Product.create!( 
  name: 'Mini Indigo Overnight Repair Serum in Cream Treatment', 
  price: 22.00, 
  size: 0.34, 
  brand: 'Tatcha', 
  category: 'Mini Size,Skincare',
  description: 'A serum-in-moisturizer treatment that visibly calms irritation, strengthens skin’s barrier, and balances the microbiome for a healthy, hydrated glow.',
  callouts: 'This product is cruelty-free and comes in recyclable packaging.',
  other_info: 'At the end of the day, skin can look irritated or feel dry and tight due to pollution and environmental stressors. Soothe, hydrate, and help strengthen your skin with this hybrid serum and moisturizer treatment, which maximizes the nightly renewal process so you wake up with healthy-looking, radiant skin.', 
  ingredients: 'Aqua/Water/Eau, Dimethicone, Diglycerin, Saccharomyces/Camellia Sinensis Leaf/Cladosiphon Okamuranus/Rice Ferment Filtrate*, Glycerin, Diphenylsiloxy Phenyl Trimethicone, Neopentyl Glycol Diethylhexanoate, Butylene Glycol, Diisostearyl Malate, Peg-10 Dimethicone, Propanediol, Disteardimonium Hectorite, Ophiopogon Japonicus Root Extract, Indigofera Tinctoria Leaf Extract, Ceramide Ng, Palmitic Acid, Linoleic Acid, Sodium Hyaluronate, Polygonum Tinctorium Leaf/Stem Extract, Cetyl Alcohol, Sucrose Stearate, Sucrose Palmitate, Maltodextrin, Sargassum Vulgare Extract, Saccharomyces Ferment Filtrate, Hydrolyzed Lagenaria Siceraria Fruit Juice, Salvia Miltiorrhiza Root Extract, Tocopherol, Lauryl Peg-9 Polydimethylsiloxyethyl Dimethicone, Magnesium Sulfate, Hydrogenated Lecithin, Phytosterols, Ethylhexylglycerin, Phenoxyethanol, Mica (Ci 77019), Tin Oxide (Ci 77861), Titanium Dioxide (Ci 77891)',
  how_to_use: 
  '-At night, use directly after cleansing or as the final step in your ritual.
  -Massage a pearl-size amount onto face, neck, and décolletage in upward strokes.'
)

p21.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Mini/Mini-Indigo-Overnight-Tatcha22.webp'), filename: 'Shobha-Images-Mini/Mini-Indigo-Overnight-Tatcha22.webp')

#Hair Products
p22 = Product.create!( 
  name: 'Sunday Clarifying Shampoo', 
  price: 32.00, 
  size: 8.0, 
  brand: 'Bumble and bumble', 
  category: 'Hair,Gifts',
  description: 'A deep clarifying shampoo that lifts away product residue, excess oil, and built-up pollutants for a full hair reset for the week ahead.',
  callouts: 'Free of parabens, formaldehydes, phthalates, and mineral oil. It is also vegan, and cruelty-free.',
  other_info: "Sunday Shampoo is a deep, effective hair and scalp cleanser with a generous, bubbly lather that lifts away impurities that can give hair that end-of-week dullness. But remember, it's not a pick for color-treated hair.", 
  fragrance: "A clean, effervescent scent with notes of sparkling cassis, watery cyclamen, and mint leaf to complement hair's Sunday start.",
  ingredients: 'Water\Aqua\Eau, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Panax Ginseng Root Extract, Salvia Officinalis (Sage) Leaf Extract, Glycerin, Magnesium Chloride, Rosmarinus Officinalis Leaf Oil, Magnesium Nitrate, Sodium Hydroxide, Citric Acid, Isoceteth-20, PPG-2 Hydroxyethyl Cocamide, Fragrance (Parfum), Limonene, Tetrasodium EDTA, Phenoxyethanol, Chlorphenesin, Methylchloroisothiazolinone, Methylisothiazolinone, Green 5 (CI 61570), Ext. Violet 2 (CI 60730).',
  how_to_use: 
  '-Work a dab through wet hair, lather well and rinse thoroughly. Follow with a hydrating Bumble and bumble conditioner or mask.'
)

p22.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Sunday-Shampoo-B%26B32.webp'), filename: 'Shobha-Images-Hair/Sunday-Shampoo-B&B32.webp')

p23 = Product.create!( 
  name: 'Cocomino™ Glossing Shampoo', 
  price: 27.00, 
  size: 8.0, 
  brand: 'Drunk Elephant', 
  category: 'Hair,',
  description: 'A sulfate-free, color-safe glossing shampoo formulated with scalp and hair in mind, removing dirt and product buildup without damaging the hair shaft or stripping color.',
  callouts: 'This product is vegan, cruelty-free, and comes in recyclable packaging.',
  other_info: 'Amino acids smooth and strengthen hair, add shine, and give visible body and bounce. Antioxidant and fatty-acid-rich oils add moisture without weighing hair down. It is formulated without sulfates for a gentle, low-foam cleanse. A blend of moisturizing sweet almond oil and extract has a naturally sweet almond scent that dissipates quickly.', 
  ingredients: 'Water/Aqua/Eau, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Sodium Methyl Oleoyl Taurate, Sodium Cocoyl Isethionate, Coconut Alkanes, Sclerocarya Birrea Seed Oil, Argania Spinosa Kernel Oil, Passiflora Edulis Seed Oil, Plukenetia Volubilis Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Rosa Canina Fruit Oil, Glycerin, Sodium PCA, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Oil, Panthenol, Glycol Distearate, Sodium Lactate, Equisetum Arvense Extract, PCA, Alanine, Arginine, Glycine, Histidine, Isoleucine, Phenylalalnine, Proline, Serine, Threonine, Valine, Adansonia Digitata Seed, Extract, Trisodium Ethylenediamine Disuccinate, Prunus Amygdalus Dulcis (Sweet Almond) Seed Extract, Citric Acid, Aspartic Acid, Polyquaternium-10, Polyquaternium-7, Laureth-4, Coco-Caprylate/Caprate, Caprylyl Glycol, Sodium Benzoate, Sodium Chloride, Chlorphenesin, Phenoxyethanol',
  how_to_use: 
  '-Apply to wet hair and massage.
  -Add a little more water to get it nice and sudsy.
  -Rinse well.
  -Do not repeat.
  -Follow with Cocomino™ Marula Cream Conditioner (sold separately) for best results.'
)

p23.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Cocoamino-Shampoo-DElephant.webp'), filename: 'Shobha-Images-Hair/Cocoamino-Shampoo-DElephant.webp')

p24 = Product.create!( 
  name: 'Final Call Humidity & Static Control Hair Spray', 
  price: 29.00, 
  size: 5.0, 
  brand: 'Drybar', 
  category: 'Hair,',
  description: 'A touchable finishing spray that creates an invisible shield to provide long-lasting humidity and static resistance, fights frizz, and tames flyaways.',
  callouts: 'Free of parabens, phthalates, and sulfates SLS & SLES. fragrance. It is also vegan, gluten-free, and cruelty-free.',
  other_info: 'This silicone-free, lightweight finishing spray provides instant frizz and static control for up to 24 hours. It creates a water-resistant barrier for long-lasting blowouts in both dry and humid climates. This spray also adds softness and shine, defends against UV damage, and leaves a smooth finish without hold.',
  fragrance: 'This spray has notes of coconut, amber, and vanilla.', 
  ingredients: 'Alcohol Denat., Hydrofluorocarbon 152a, Hexadecene, Neopentyl Glycol Diheptanoate, Octylacrylamide/Acrylates/Butylaminoethyl Methacrylate Copolymer, Isododecane, Behentrimonium Chloride (as an anti-static statement/ en tant qu’agent anti-statique), Diheptyl Succinate, Jojoba Esters, Helianthus Annuus (Sunflower) Seed Wax, Gardenia Taitensis Flower, Vanilla Planifolia Fruit Extract, Polyglycerin-3, Tocopherol, Tetrahexyldecyl Ascorbate, Capryloyl Glycerin/Sebacic Acid Copolymer, Ethylhexyl Methoxycinnamate, Cocos Nucifera (Coconut) Oil, Glycerin, Octadecene, Aminomethyl Propanol, Aqua / Water / Eau, Isopropyl Alcohol, Leuconostoc/Radish Root Ferment Filtrate, BHT, Parfum / Fragrance, Coumarin.',
  how_to_use: 
  '-Use as a final step on dry hair.
  -Shake well.
  -Hold can six to eight inches from hair and mist evenly throughout.
  -Use lightly on fine hair.'
)

p24.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Final-Call-Hair-Drybar29.webp'), filename: 'Shobha-Images-Hair/Final-Call-Hair-Drybar29.webp')

p25 = Product.create!( 
  name: 'Complete Instant Recovery Heat Protectant Leave-In Serum', 
  price: 29.00, 
  size: 3.4, 
  brand: 'JVN', 
  category: 'Hair,',
  description: 'An intense, nourishing, transformative leave-in treatment designed to repair and smooth weak, ultra-damaged, over-processed hair with a silky finish.',
  callouts: 'This product is vegan, cruelty-free, and comes in recyclable packaging.',
  other_info: "The silky, lightweight texture of this formula penetrates without greasiness or heaviness while providing heat protection. It features patented, sugarcane derived Hemisqualane—JVN's hero ingredient that improves hair over time by creating healthier, stronger strands—niacinamide to support keratin repair and increase body and sheen, and charged lemon protein to restore strength. It's also silicone-free, sulfate-free. The packaging is 99 percent free of plastic and recyclable.", 
  ingredients: 'Water/Aqua/Eau, Hydrogenated Farnesene*, Glycerin, Sodium Acrylates Copolymer, Squalane, Hydroxypropyltrimonium Lemon Protein, Niacinamide, Lecithin, Tocopherol, Citrus Reticulata (Tangerine) Peel Oil, Jasminum Officinale (Jasmine) Oil, Leuconostoc/Radish Root Ferment Filtrate, Sodium Gluconate, Ethylhexylglycerin, Benzyl Alcohol, Citric Acid, Fragrance/Parfum, Limonene, Linalool.',
  how_to_use: 
  '- Apply to palms and rub together before gently smoothing down wet to damp mid-lengths and ends. Style as usual. Use before your other products to enhance their performance - or by itself for a smooth, protected, no-hold style.

  - JVN TIP: Start with a blueberry sized amount on wet to damp hair for finer strands, adding more if needed.'
)

p25.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Complete-Instant-JVN29.webp'), filename: 'Shobha-Images-Hair/Complete-Instant-JVN29.webp')

p26 = Product.create!( 
  name: "Hairdresser's Invisible Oil Heat Protectant Leave In Conditioner Primer", 
  price: 34.00, 
  size: 8.5, 
  brand: 'Bumble and bumble', 
  category: 'Hair,',
  description: 'A primer that starts your styling routine by instantly cutting frizz by 50 percent all day versus untreated hair (even in extreme humidity).',
  callouts: 'Free of parabens, formaldehydes, phthalates, mineral oil, and sulfates SLS & SLES. It is also cruelty-free',
  other_info: 'Meet Bumble and bumble’s number-one bestseller. This multitasking leave-in provides heat protection up to 450°F/232°C, has UV filters to protect hair against the drying effects of the sun, protects color from fading for up to 16 washes, detangles to protect against breakage, smooths, softens, and adds shine.', 
  fragrance: "This is a luxe yet light scent of fruit and tropical florals, anchored with rich musk and woodsy notes.",
  ingredients: 'Water\Aqua\Eau, Cetearyl Alcohol, Butylene Glycol, PEG-12 Glyceryl Dimyristate, Vitis Vinifera (Grape) Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Macadamia Integrifolia Seed Oil, Cocos Nucifera (Coconut) Oil, Gardenia Taitensis Flower Extract, Argania Spinosa Kernel Oil, Carthamus Tinctorius (Safflower) Seed Oil, Hydroxypropyltrimonium Hydrolyzed Corn Starch, Hydrolyzed Vegetable Protein PG-Propyl Silanetriol, Hydrolyzed Wheat Protein PG-Propyl Silanetriol, Dimethicone, Glycerin, Sodium Hyaluronate, Behentrimonium Methosulfate, Distearyldimonium Chloride, Dimethiconol, Cetrimonium Chloride, Butyl Methoxydibenzoylmethane, Ethylhexyl Methoxycinnamate, Sodium Chloride, Citric Acid, BHT, Fragrance (Parfum), Hexyl Cinnamal, Linalool, Limonene, Potassium Sorbate, Phenoxyethanol. The Signature 6-Oil Blend Includes: Cocos Nucifera (Coconut) Oil, Argania Spinosa Kernel (Argan) Oil, Vitis Vinifera (Grape) Seed Oil, Macadamia Integrifolia Seed (Macadamia) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, and Carthamus Tinctorius (Safflower) Seed Oil.',
  how_to_use: 
  '-On day one, apply to damp hair, rake through, and style.
  -On day two (and so on), apply to dry hair to refresh and restyle.'
)

p26.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Hairdressers-Oil-B%26B34.webp'), filename: 'Shobha-Images-Hair/Hairdressers-Oil-B&B34.webp')

p27 = Product.create!( 
  name: 'Embody Daily Volumizing Shampoo', 
  price: 21.00, 
  size: 10.0, 
  brand: 'JVN', 
  category: 'Hair,',
  description: 'A sulfate-free shampoo with a luxurious lather that builds body and bounce without drying out your hair. It removes buildup without stripping, adds bounce, body, and shine while visibly enhancing fullness',
  callouts: 'This product is vegan, cruelty-free, and comes in recyclable packaging.',
  other_info: 'Powered by patented sugarcane-derived hemi-squalane (a hero ingredient that improves hair health over time time) plus follicle-stimulating caffeine and soothing, hydrating aloe leaf juice, this shampoo strengthens and detoxifies for visibly fuller hair. The 98 percent-plastic-free packaging consists of an infinitely recyclable aluminum base and PCR pump.', 
  fragrance: 'Lush jasmine, sparkling cassis, and radiant bergamot accent rich notes of sandalwood and amber.',
  ingredients: 'Water/Aqua/Eau, Aloe Barbadensis Leaf Juice, Sodium Methyl Cocoyl Taurate, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Hydroxysultaine, Coco-Glucoside, Hydrogenated Farnesene*, Caffeine, Glycerin, Panthenol, Stearamidopropyl Dimethylamine Lactate, Glyceryl Oleate, Sorbitan Oleate Decylglucoside Crosspolymer, Sodium Gluconate, Sodium Levulinate, Sodium Chloride, Potassium Sorbate, Citric Acid, Fragrance/Parfum, Linalool.',
  how_to_use: 
  '-Apply to wet hair and gently massage into scalp with the pads of your fingers, adding more if needed to make sure your entire scalp gets lathered up. Rinse.
  -Follow up with your fave JVN conditioner.'
)

p27.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Embody-Daily-JVN21.webp'), filename: 'Shobha-Images-Hair/Embody-Daily-JVN21.webp')

p28 = Product.create!( 
  name: 'Liquid Glass Moisture-Rich Miracle Smoothing Sealant', 
  price: 34.00, 
  size: 6.4, 
  brand: 'Drybar', 
  category: 'Hair,',
  description: 'A heat-activated spray that lasts through up to three washes, delivering frizz resistance, intensive moisturization, and a super-glossy finish.',
  callouts: 'Free of parabens, phthalates, and sulfates SLS & SLES. It is also vegan, gluten-free, cruelty-free, and comes in recyclable packaging.',
  other_info: "Perfect for coarse-to-thick hair, curls, and coils, this formula tames frizz, amplifies shine, and provides superior hydration while protecting hair from heat (up to 450°F/232°C). Pair it with Drybar's Liquid Glass Collection (sold separately) for a silky, super-smooth blowout that lasts through up to three washes.", 
  fragrance: "Drybar's velvet scent features notes of cardamom, banana leaf, and velvet musk.",
  ingredients: 'Aqua (Water, Eau), Dipropylene Glycol, Cetyl Triethylmonium Dimethicone PEG-8 Succinate, Polysilicone-29, Mangifera Indica (Mango) Seed Butter, Cocos Nucifera (Coconut) Oil, Brassica Campestris (Rapeseed) Seed Oil, Linum Usitatissimum (Linseed) Seed Oil, Emblica Officinalis Fruit Extract, Sodium Coco PG-Dimonium Chloride Phosphate, Tetrasodium Glutamate Diacetate, Sodium Hydroxide, Polysorbate 20, Hydroxypropylgluconamide, Silicone Quaternium-18, Trideceth-6, Trideceth-12, Hydroxypropylammonium Gluconate, Tartaric Acid, Cetrimonium Chloride, Glycolic Acid, Caprylyl Glycol, Hexylene Glycol, Phenoxyethanol, Potassium Sorbate, BHT, Citric Acid, Sodium Benzoate, Benzyl Alcohol, Parfum (Fragrance), Linalool, Hexyl Cinnamal, Benzyl Salicylate.',
  how_to_use: 
  '-Use on damp hair.
  -For best results, do not apply with any other pre-styling products.
  -Begin with clean, towel-dried, detangled hair.
  -Work in sections, spraying generously from roots to ends.
  -Comb through to evenly distribute.
  -To activate and seal in the formula, blow-dry thoroughly and finish with a flatiron or hot tool of your choice.'
)

p28.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Liquid-Glass-Drybar34.webp'), filename: 'Shobha-Images-Hair/Liquid-Glass-Drybar34.webp')

p29 = Product.create!( 
  name: 'Mini Sunday Clarifying Shampoo', 
  price: 16.00, 
  size: 2.0, 
  brand: 'Bumble and bumble', 
  category: 'Hair,Mini Size',
  description: 'A deep clarifying shampoo that lifts away product residue, excess oil, and built-up pollutants for a full hair reset for the week ahead.',
  callouts: 'Free of parabens, formaldehydes, phthalates, and mineral oil. It is also vegan, and cruelty-free.',
  other_info: "Sunday Shampoo is a deep, effective hair and scalp cleanser with a generous, bubbly lather that lifts away impurities that can give hair that end-of-week dullness. But remember, it's not a pick for color-treated hair.", 
  fragrance: "A clean, effervescent scent with notes of sparkling cassis, watery cyclamen, and mint leaf to complement hair's Sunday start.",
  ingredients: 'Water\Aqua\Eau, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Panax Ginseng Root Extract, Salvia Officinalis (Sage) Leaf Extract, Glycerin, Magnesium Chloride, Rosmarinus Officinalis Leaf Oil, Magnesium Nitrate, Sodium Hydroxide, Citric Acid, Isoceteth-20, PPG-2 Hydroxyethyl Cocamide, Fragrance (Parfum), Limonene, Tetrasodium EDTA, Phenoxyethanol, Chlorphenesin, Methylchloroisothiazolinone, Methylisothiazolinone, Green 5 (CI 61570), Ext. Violet 2 (CI 60730).',
  how_to_use: 
  '-Work a dab through wet hair, lather well and rinse thoroughly. Follow with a hydrating Bumble and bumble conditioner or mask.'
  )
  
  p29.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Mini-Sunday-Shampoo-B%26B16.webp'), filename: 'Shobha-Images-Hair/Mini-Sunday-Shampoo-B&B16.webp')
  
  
  p30 = Product.create!( 
    name: 'Mini Complete Instant Recovery Heat Protectant Leave-In Serum', 
    price: 14.00, 
    size: 0.84, 
    brand: 'JVN', 
    category: 'Hair,Mini Size',
    description: 'An intense, nourishing, transformative leave-in treatment designed to repair and smooth weak, ultra-damaged, over-processed hair with a silky finish.',
    callouts: 'This product is vegan, cruelty-free, and comes in recyclable packaging.',
    other_info: "The silky, lightweight texture of this formula penetrates without greasiness or heaviness while providing heat protection. It features patented, sugarcane derived Hemisqualane—JVN's hero ingredient that improves hair over time by creating healthier, stronger strands—niacinamide to support keratin repair and increase body and sheen, and charged lemon protein to restore strength. It's also silicone-free, sulfate-free. The packaging is 99 percent free of plastic and recyclable.", 
    ingredients: 'Water/Aqua/Eau, Hydrogenated Farnesene*, Glycerin, Sodium Acrylates Copolymer, Squalane, Hydroxypropyltrimonium Lemon Protein, Niacinamide, Lecithin, Tocopherol, Citrus Reticulata (Tangerine) Peel Oil, Jasminum Officinale (Jasmine) Oil, Leuconostoc/Radish Root Ferment Filtrate, Sodium Gluconate, Ethylhexylglycerin, Benzyl Alcohol, Citric Acid, Fragrance/Parfum, Limonene, Linalool.',
    how_to_use: 
    '- Apply to palms and rub together before gently smoothing down wet to damp mid-lengths and ends. Style as usual. Use before your other products to enhance their performance - or by itself for a smooth, protected, no-hold style.
    
    - JVN TIP: Start with a blueberry sized amount on wet to damp hair for finer strands, adding more if needed.'
    )
    
    p30.photo.attach(io: URI.open('https://shobha-seeds.s3.us-west-1.amazonaws.com/Shobha-Images-Hair/Mini-Complete-Instant-JVN14.webp'), filename: 'Shobha-Images-Hair/Mini-Complete-Instant-JVN14.webp')

    #Fragrance Products

    
    
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
