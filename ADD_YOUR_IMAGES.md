# 📸 How to Add Your Real Construction Images

## 🎯 **Current Status**
✅ **Page is now working** with placeholder images at: 
`http://localhost:5173/enhanced-services/ground-up-construction`

## 📁 **Where to Put Your Images**

### **1. Blueprint Images (4 images)**
Put your blueprint images in: `public/images/construction/blueprints/`
- Rename them to: `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`

### **2. Foundation Images (5 images)** 
Put your foundation images in: `public/images/construction/foundation/`
- Keep original names: `20241221_162643.jpg`, `20241221_162647.jpg`, etc.

### **3. Framing Images (3 images)**
Put your framing images in: `public/images/construction/framing/`
- Keep original names: `20250102_143944.jpg`, `20250102_143946.jpg`, `IMG-20250113-WA0023.jpg`

## 🔄 **Update the Code**

Once images are in place, update `src/data/projectShowcases.ts`:

### **Replace Blueprint URLs:**
```typescript
images: [
  '/images/construction/blueprints/1.jpg',
  '/images/construction/blueprints/2.jpg', 
  '/images/construction/blueprints/3.jpg',
  '/images/construction/blueprints/4.jpg'
],
```

### **Replace Foundation URLs:**
```typescript
images: [
  '/images/construction/foundation/20241221_162643.jpg',
  '/images/construction/foundation/20241221_162647.jpg',
  '/images/construction/foundation/20241221_162826.jpg',
  '/images/construction/foundation/20241221_163309.jpg',
  '/images/construction/foundation/20241221_163328.jpg'
],
```

### **Replace Framing URLs:**
```typescript
images: [
  '/images/construction/framing/20250102_143944.jpg',
  '/images/construction/framing/20250102_143946.jpg',
  '/images/construction/framing/IMG-20250113-WA0023.jpg'
],
```

### **Replace Main Service Image:**
In `src/data/enhancedServices.ts`, change:
```typescript
image: "/images/construction/framing/20250102_143944.jpg",
```

## 🚀 **Quick Terminal Commands**

If you have the images in a folder, you can copy them quickly:

```bash
# Create the directories (already done)
mkdir -p public/images/construction/{blueprints,foundation,framing}

# Copy your images (adjust paths as needed)
cp /path/to/your/blueprint-images/* public/images/construction/blueprints/
cp /path/to/your/foundation-images/* public/images/construction/foundation/
cp /path/to/your/framing-images/* public/images/construction/framing/
```

## ✨ **Result**
Once you add the real images and update the paths, your actual project photos will replace the placeholders and you'll have a professional project showcase with your real construction documentation!

The gallery system will automatically handle:
- Image optimization and loading
- Lightbox viewing
- Phase navigation
- Mobile responsiveness
- Professional presentation 