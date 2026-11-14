import {
  CalendarDays, ChefHat, CircleDollarSign, Clock3, CookingPot, Heart,
  Leaf, ListChecks, MessageCircle, RefreshCw, Salad, Search, ShoppingBasket,
  SlidersHorizontal, Sparkles, Utensils, Wallet, WandSparkles,
} from 'lucide-react'

export const problems = [
  { icon: ChefHat, title: "Don't know what to cook", description: 'Find fresh ideas for whatever kind of day you’re having.' },
  { icon: Clock3, title: 'Limited cooking time', description: 'Discover meals that work with the time you have.' },
  { icon: CookingPot, title: 'Ingredients going unused', description: 'Turn what’s already in your kitchen into inspiration.' },
  { icon: Wallet, title: 'Need to stick to a budget', description: 'Explore meal ideas with your budget in mind.' },
  { icon: RefreshCw, title: 'Tired of the same meals', description: 'Add a little variety to your everyday rotation.' },
  { icon: CalendarDays, title: 'Meal planning feels hard', description: 'Bring more structure to the week ahead.' },
]

export const steps = [
  { icon: MessageCircle, title: 'Tell us what you need.', description: 'Share your ingredients, cravings, schedule, or whatever is on your mind.' },
  { icon: WandSparkles, title: 'AI understands your needs.', description: 'FoodMind considers the details you share to find a helpful direction.' },
  { icon: Utensils, title: 'Discover your next meal.', description: 'Explore ideas made for your moment and find something you’ll love.' },
]

export const features = [
  { icon: MessageCircle, title: 'AI Food Assistant', description: 'Talk through your food questions in a natural conversation.' },
  { icon: Search, title: 'Smart Recipe Discovery', description: 'Find new ideas that suit your tastes and your day.' },
  { icon: CookingPot, title: 'Ingredient-Based Meals', description: 'Start with what you have and see what’s possible.' },
  { icon: SlidersHorizontal, title: 'Personalized Preferences', description: 'Keep your likes, needs, and preferences in the picture.' },
  { icon: CalendarDays, title: 'Smart Meal Planner', description: 'Make room for more ease and variety throughout your week.' },
  { icon: ShoppingBasket, title: 'Shopping Lists', description: 'Keep track of what you need for the meals you want to make.' },
]

export const lifestyles = [
  { icon: Heart, title: 'Your Taste', description: 'More of what you love, with room to discover something new.' },
  { icon: Clock3, title: 'Your Lifestyle', description: 'Ideas that fit your schedule, whether you have minutes or hours.' },
  { icon: CircleDollarSign, title: 'Your Budget', description: 'Meal inspiration that keeps your spending in mind.' },
  { icon: Leaf, title: 'Your Dietary Needs', description: 'Preferences and dietary choices can be part of the conversation.' },
]

export const benefits = [
  { icon: Clock3, text: 'Save time deciding what to eat.' },
  { icon: CookingPot, text: 'Use available ingredients.' },
  { icon: Sparkles, text: 'Discover new meals.' },
  { icon: ListChecks, text: 'Organize your meals.' },
  { icon: Leaf, text: 'Reduce unnecessary food waste.' },
  { icon: SlidersHorizontal, text: 'Improve recommendations with feedback.' },
]

export const recipes = [
  { icon: Salad, name: 'Herby chicken rice bowl', detail: 'Fresh, satisfying & simple', time: '25 min' },
  { icon: CookingPot, name: 'Creamy yogurt chicken', detail: 'A cozy one-pan favorite', time: '30 min' },
  { icon: Utensils, name: 'Spiced chicken & rice', detail: 'Big flavor, little fuss', time: '30 min' },
]

export const faqs = [
  { question: 'What is FoodMind?', answer: 'FoodMind is an upcoming AI-powered personal food companion designed to make everyday meal decisions feel easier.' },
  { question: 'How does the AI food assistant work?', answer: 'The planned assistant will use details you share, such as ingredients, preferences, and available time, to suggest meal ideas. The conversation shown here is an illustrative preview.' },
  { question: 'Can I get recipes based on my available ingredients?', answer: 'Ingredient-based meal discovery is part of the FoodMind vision. You’ll be able to start with what you have and explore ideas around it.' },
  { question: 'Can I set dietary preferences?', answer: 'Personalized dietary preferences are planned to help make recommendations more relevant to your needs. Always check ingredients yourself for allergies and other medical requirements.' },
  { question: 'Can FoodMind plan my weekly meals?', answer: 'A smart meal planner is planned as part of FoodMind. It is not available on this preview page yet.' },
  { question: 'Is FoodMind free?', answer: 'Pricing has not been announced yet. This page is a preview, and account registration is not available at this stage.' },
  { question: 'Does FoodMind provide nutritional information?', answer: 'Nutrition features have not been confirmed yet. FoodMind is not a substitute for advice from a qualified health professional.' },
]
