# Setup Your Avatar Photo

To display your professional photo in the portfolio:

## Option 1: Manual Setup (Easy)
1. Download your photo from the email/attachment
2. Save it to: `public/avatar.jpg`
3. Rebuild: `npm run build`
4. The photo will appear in the About section!

## Option 2: If Using Windows File Explorer
1. Right-click your photo file
2. Copy it
3. Navigate to: `e:\charan portfolio\public\`
4. Paste it there
5. Rename to `avatar.jpg`

## Option 3: Via PowerShell (If you have the image file)
```powershell
Copy-Item -Path "C:\path\to\your\photo.jpg" -Destination "e:\charan portfolio\public\avatar.jpg"
```

Once the file is in place:
- ✅ Photo displays in circular gradient frame
- ✅ Automatic fallback to "CK" initials if image fails to load
- ✅ Beautiful shimmer and glow effects applied

**Supported formats:** .jpg, .jpeg, .png (JPEG recommended for file size)
