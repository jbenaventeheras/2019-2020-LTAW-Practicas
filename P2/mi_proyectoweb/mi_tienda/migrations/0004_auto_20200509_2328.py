# Generated by Django 2.2.10 on 2020-05-09 23:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0003_auto_20200509_2327'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pedido',
            old_name='nombres',
            new_name='nombre',
        ),
    ]