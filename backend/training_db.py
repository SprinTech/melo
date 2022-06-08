import os
import psycopg2
from psycopg2 import Error

DATABASE_USER = os.getenv('DATABASE_USER')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')
DATABASE_HOST = os.getenv('DATABASE_HOST')
DATABASE_PORT = os.getenv('DATABASE_PORT')
DATABASE_NAME = os.getenv('DATABASE_NAME')

connection = psycopg2.connect(
    database=DATABASE_NAME,
    user=DATABASE_USER,
    password=DATABASE_PASSWORD,
    host=DATABASE_HOST,
    port=DATABASE_PORT
)

cursor = connection.cursor()

try:
    cursor.execute(
        """
        SELECT EXISTS(
            SELECT 1 FROM information_schema.tables 
            WHERE table_catalog='melomaniac' AND 
                table_schema='public' AND 
                table_name='training_data');
        """
    )
    exists = cursor.fetchone()[0]

    if not exists:
        cursor.execute(
            """
        CREATE TABLE training_data(
            id INTEGER PRIMARY KEY,
            bandwith_mean float8 NOT NULL,
            bandwith_var float8 NOT NULL,
            cen10_mean float8 NOT NULL,
            cen10_var float8 NOT NULL,
            cen11_mean float8 NOT NULL,
            cen11_var float8 NOT NULL,
            cen12_mean float8 NOT NULL,
            cen12_var float8 NOT NULL,
            cen1_mean float8 NOT NULL,
            cen1_var float8 NOT NULL,
            cen2_mean float8 NOT NULL,
            cen2_var float8 NOT NULL,
            cen3_mean float8 NOT NULL,
            cen3_var float8 NOT NULL,
            cen4_mean float8 NOT NULL,
            cen4_var float8 NOT NULL,
            cen5_mean float8 NOT NULL,
            cen5_var float8 NOT NULL,
            cen6_mean float8 NOT NULL,
            cen6_var float8 NOT NULL,
            cen7_mean float8 NOT NULL,
            cen7_var float8 NOT NULL,
            cen8_mean float8 NOT NULL,
            cen8_var float8 NOT NULL,
            cen9_mean float8 NOT NULL,
            cen9_var float8 NOT NULL,
            centroids_mean float8 NOT NULL,
            centroids_var float8 NOT NULL,
            contrast_mean float8 NOT NULL,
            contrast_var float8 NOT NULL,
            filename VARCHAR(100) NOT NULL,
            genre VARCHAR(50) NOT NULL,
            harm_mean float8 NOT NULL,
            harm_var float8 NOT NULL,
            mfcc10_mean float8 NOT NULL,
            mfcc10_var float8 NOT NULL,
            mfcc11_mean float8 NOT NULL,
            mfcc11_var float8 NOT NULL,
            mfcc12_mean float8 NOT NULL,
            mfcc12_var float8 NOT NULL,
            mfcc13_mean float8 NOT NULL,
            mfcc13_var float8 NOT NULL,
            mfcc14_mean float8 NOT NULL,
            mfcc14_var float8 NOT NULL,
            mfcc15_mean float8 NOT NULL,
            mfcc15_var float8 NOT NULL,
            mfcc16_mean float8 NOT NULL,
            mfcc16_var float8 NOT NULL,
            mfcc17_mean float8 NOT NULL,
            mfcc17_var float8 NOT NULL,
            mfcc18_mean float8 NOT NULL,
            mfcc18_var float8 NOT NULL,
            mfcc19_mean float8 NOT NULL,
            mfcc19_var float8 NOT NULL,
            mfcc1_mean float8 NOT NULL,
            mfcc1_var float8 NOT NULL,
            mfcc20_mean float8 NOT NULL,
            mfcc20_var float8 NOT NULL,
            mfcc2_mean float8 NOT NULL,
            mfcc2_var float8 NOT NULL,
            mfcc3_mean float8 NOT NULL,
            mfcc3_var float8 NOT NULL,
            mfcc4_mean float8 NOT NULL,
            mfcc4_var float8 NOT NULL,
            mfcc5_mean float8 NOT NULL,
            mfcc5_var float8 NOT NULL,
            mfcc6_mean float8 NOT NULL,
            mfcc6_var float8 NOT NULL,
            mfcc7_mean float8 NOT NULL,
            mfcc7_var float8 NOT NULL,
            mfcc8_mean float8 NOT NULL,
            mfcc8_var float8 NOT NULL,
            mfcc9_mean float8 NOT NULL,
            mfcc9_var float8 NOT NULL,
            perc_mean float8 NOT NULL,
            perc_var float8 NOT NULL,
            rms_mean float8 NOT NULL,
            rms_var float8 NOT NULL,
            rolloff_mean float8 NOT NULL,
            rolloff_var float8 NOT NULL,
            stft10_mean float8 NOT NULL,
            stft10_var float8 NOT NULL,
            stft11_mean float8 NOT NULL,
            stft11_var float8 NOT NULL,
            stft12_mean float8 NOT NULL,
            stft12_var float8 NOT NULL,
            stft1_var float8 NOT NULL,
            stft1_mean float8 NOT NULL,
            stft2_var float8 NOT NULL,
            stft2_mean float8 NOT NULL,
            stft3_var float8 NOT NULL,
            stft3_mean float8 NOT NULL,
            stft4_var float8 NOT NULL,
            stft4_mean float8 NOT NULL,
            stft5_var float8 NOT NULL,
            stft5_mean float8 NOT NULL,
            stft6_var float8 NOT NULL,
            stft6_mean float8 NOT NULL,
            stft7_var float8 NOT NULL,
            stft7_mean float8 NOT NULL,
            stft8_var float8 NOT NULL,
            stft8_mean float8 NOT NULL,
            stft9_var float8 NOT NULL,
            stft9_mean float8 NOT NULL,
            tempo float8 NOT NULL,
            tonnetz0_var float8 NOT NULL,
            tonnetz1_var float8 NOT NULL,
            tonnetz2_var float8 NOT NULL,
            tonnetz3_var float8 NOT NULL,
            tonnetz4_var float8 NOT NULL,
            tonnetz5_var float8 NOT NULL,
            tonnetz0_mean float8 NOT NULL,
            tonnetz1_mean float8 NOT NULL,
            tonnetz2_mean float8 NOT NULL,
            tonnetz3_mean float8 NOT NULL,
            tonnetz4_mean float8 NOT NULL,
            tonnetz5_mean float8 NOT NULL,
            zero_crossings float8 NOT NULL
        )
        """
        )
        with open('./training_data.csv', 'r') as f:
            next(f)  # Skip the header row.
            cursor.copy_from(f, 'training_data', sep=',')

        connection.commit()

except (Exception, Error) as error:
    print("Error while connecting to PostgreSQL", error)

finally:
    cursor.close()
    connection.close()
    print("PostgreSQL connection is closed")
