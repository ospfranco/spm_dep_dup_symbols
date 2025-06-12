Pod::Spec.new do |s|
  s.name           = 'Passmod'
  s.version        = '1.0.0'
  s.summary        = 'A sample project summary'
  s.description    = 'A sample project description'
  s.author         = ''
  s.homepage       = 'https://docs.expo.dev/modules/'
  s.platforms      = {
    :ios => '15.1',
    :tvos => '15.1'
  }
  s.source         = { git: '' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  if defined?(:spm_dependency)
    spm_dependency(s,
      url: 'https://github.com/AndyQ/NFCPassportReader',
      requirement: {kind: 'branch', branch: 'main'},
      products: ['NFCPassportReader']
    )
  else 
    raise "Please upgrade React Native to >=0.75.0 to use SPM dependencies." 
  end 

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}"
end
