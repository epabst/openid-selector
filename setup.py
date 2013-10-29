import os
from distutils.core import setup


version = '0.1'


here = os.path.abspath(os.path.dirname(__file__))
README  = open(os.path.join(here, 'README.txt')).read()
AUTHORS = open(os.path.join(here, 'AUTHORS.txt')).read()
CHANGES = open(os.path.join(here, 'CHANGES.txt')).read()

long_description = (
    README
    + '\n' +
    AUTHORS
    + '\n' +
    CHANGES
)


def staging(pkg, entries, init=True, rmdir=True):
    import os, shutil
    packages = []
    package_data = {}
    if os.path.isdir(pkg):
        print('Staging folder {} already exists. Skipping...'.format(pkg))
        packages.append(pkg)
        for entry in entries:
            (from_dir, to_dir, files) = entry
            subpkg = '.'.join([pkg, to_dir])
            packages.append(subpkg)
            package_data[subpkg] = files
    else:
        os.mkdir(pkg)
        if init:
            open('/'.join([pkg, '__init__.py']), 'a').close()
            packages.append(pkg)
        for entry in entries:
            (from_dir, to_dir, files) = entry
            os.mkdir('/'.join([pkg, to_dir]))
            if init:
                open('/'.join([pkg, to_dir, '__init__.py']), 'a').close()
            for file in files:
                src = '/'.join([from_dir, file])
                dst = '/'.join([pkg, to_dir, file])
                shutil.copyfile(src, dst)
            subpkg = '.'.join([pkg, to_dir])
            packages.append(subpkg)
            package_data[subpkg] = files
    return (packages, package_data)


pkg = 'openid_selector'
staging_entries = \
         [ ('js',     'js',     [ 'jquery-1.2.6.min.js', 'openid-en.js', 'openid-jquery.js' ]), \
           ('css',    'css',    [ 'openid.css', 'openid-shadow.css' ]), \
           ('images', 'images', [ 'openid-inputicon.gif', 'openid-providers-en.png' ]) ]

(packages, package_data) = staging(pkg, staging_entries)


setup(name='openid-selector',
      version=version,
      description="openid-selector is a frontend in JavaScript for authentication with OpenID, OAuth2, etc",
      long_description=long_description,
      classifiers=[
          "Programming Language :: JavaScript",
          "Topic :: Internet :: WWW/HTTP",
      ],
      keywords='authentication frontend javascript openid oauth2 sasli',
      author='Richard Gomes',
      author_email='rgomes.info@gmail.com',
      url='http://openid-selector.readthedocs.org',
      license='BSD',
      packages=packages,
      package_data=package_data,
      include_package_data=False,
      zip_safe=False,
      install_requires=[ 'setuptools' ],
      )
