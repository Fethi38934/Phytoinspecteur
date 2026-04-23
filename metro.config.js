const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// دعم ملفات JSON الكبيرة (قاعدة بيانات الأمراض)
config.resolver.sourceExts.push('json');

// تحسين الأداء
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: { keep_fnames: true },
};

module.exports = config;
